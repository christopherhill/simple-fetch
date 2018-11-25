export const createMultipart = (obj, file) => {
  if (!obj) return;
  const formData = new FormData();
  Object.keys(obj).forEach(key => formData.append(key, obj[key]));
  formData.append('file', file);
  return formData;
}
