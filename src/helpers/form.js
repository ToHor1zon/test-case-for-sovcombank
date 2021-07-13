export function getFormData(formId) {
  const formData = {};

  const form = document.querySelector(formId);

  form.elements.forEach(e => {
    if(e.name) {
      formData[e.name] = parseInt(e.value, 10) ? parseInt(e.value, 10) : e.value;
    }
  });

  return formData;
}
