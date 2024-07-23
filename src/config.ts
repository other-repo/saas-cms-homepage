import fs from 'fs';
import yaml from 'js-yaml';

export function loadConfig() {
  const fileContents = fs.readFileSync('config.yml', 'utf8');
  const data = yaml.load(fileContents);
  return data;
}
