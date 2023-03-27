import Consul from 'consul';

const consul = new Consul();

export async function registerService() {
  const serviceName = 'api-service';
  const serviceId = `${serviceName}-${process.pid}`;
  const servicePort = 3000; 

  await consul.agent.service.register({
    name: serviceName,
    id: serviceId,
    address: '127.0.0.1',
    port: servicePort,
    check: {
      http: `http://127.0.0.1:${servicePort}/health`,
      interval: '10s',
      timeout: '5s',
    },
  });


  process.on('exit', () => {
    consul.agent.service.deregister(serviceId);
  });
}