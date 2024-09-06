const feetbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormEl = () => {
  const formDataLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formDataLS === null) {
    return;
  }

  formData = formDataLS;

  for (const key in formDataLS) {
    if (formDataLS.hasOwnProperty(key)) {
      feetbackFormEl.elements[key].value = formDataLS[key];
    }
  }
};

fillFormEl();

const onFormField = event => {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  event.target.reset();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
};

feetbackFormEl.addEventListener('input', onFormField);
feetbackFormEl.addEventListener('submit', onFeedbackSubmit);
