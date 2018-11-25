export const handleData = (data) => {
  const contentHeader = data.headers.get('content-disposition');
  if (!contentHeader) {
    throw new Error('Could not parse content header.');
  }
  return data.blob();
};

export const handleBlob = (blob) => {
  const objectUrl = window.URL.createObjectURL(blob);
  const aTag = document.createElement('a');
  aTag.href = objectUrl;
  aTag.download = contentHeader.match(/filename="(.+)"/)[1];
  aTag.click();
  aTag.remove();
};
