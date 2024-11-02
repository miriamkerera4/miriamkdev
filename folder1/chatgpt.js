function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  function validateForm() {
    const fields = [
      { id: 'firstname', name: 'First Name' },
      { id: 'lastname', name: 'Last Name' },
      { id: 'email', name: 'Email' },
      { id: 'message', name: 'Message' },
    ];
    
    let allFieldsEmpty = true;
    let firstEmptyField = null;
  
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      if (input.value === '') {
        if (!firstEmptyField) {
          firstEmptyField = field.name;
        }
      } else {
        allFieldsEmpty = false;
      }
    });
  
    if (allFieldsEmpty) {
      alert('Please complete all required fields.');
    } else if (firstEmptyField) {
      alert(`Please complete the ${firstEmptyField} field.`);
    } else {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
    }
  }
  
    