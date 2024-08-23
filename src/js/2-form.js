const feetbackForm = document.querySelector('.feedback-form');
let formData = {};

const fillForm = () => {
  const elFromFormData = JSON.parse(localStorage.getItem('feedback'));

  if (elFromFormData === null) {
    return;
  }
  for (const key in elFromFormData) {
    if (elFromFormData.hasOwnProperty(key)) {
      feetbackForm.elements[key].value = elFromFormData[key];
    }
  }
};

fillForm();

const onFormField = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback', JSON.stringify(formData));
};

const onFeedbackSubmit = event => {
  event.preventDefoult();
  if (event.target.value === '') {
    return alert('Fill please all fields');
  }

  event.target.reset();
  localStorage.removeItem('feedback');
};

feetbackForm.addEventListener('input', onFormField);
feetbackForm.addEventListener('submit', onFeedbackSubmit);