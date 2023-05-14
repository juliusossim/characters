import { configName } from './utils/camelCase';
const computeEnv = () => {
  const envVars = {};
  for (const key in import.meta.env) {
    envVars[configName(key)] = import.meta.env[key];
  }
  return envVars;
};

export const config = computeEnv();
