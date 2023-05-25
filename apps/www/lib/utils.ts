import { ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const convertMap: any = {
  border: (value: { width: any; style: any; color: any }) => {
    return `${value.width} ${value.style} ${value.color}`;
  },
  shadow: (value: {
    offsetX: any;
    offsetY: any;
    blur: any;
    spread: any;
    color: any;
  }) => {
    return `${value.offsetX} ${value.offsetY} ${value.blur} ${value.spread} ${value.color}`;
  },
  default: (value: any) => {
    return value;
  },
};

export function convertValue(value: any, category: any) {
  return convertMap[category] ? convertMap[category](value) : value;
}

export const blobToBase64 = function (blob: Blob) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataUrl: any = reader.result;
    var base64 = dataUrl?.split(',')[1];

    return base64;
  };
  reader.readAsDataURL(blob);
};
