import {
  Alert,
  AlertCircleFilled,
  CheckmarkCircle,
  Info,
  Close,
} from '@opub-icons/workflow';

const handler = {
  get: function (target: any, name: any) {
    return target.hasOwnProperty(name) ? target[name] : Info; // default value
  },
};

export const icons = {
  success: CheckmarkCircle,
  error: AlertCircleFilled,
  warning: Alert,
  info: Info,
  close:Close,
};

export const stateIcon = new Proxy(icons, handler);
