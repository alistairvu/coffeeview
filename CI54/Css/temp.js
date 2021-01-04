document.addEventListener("DOMContentLoaded", function(event) {
    const preview = document.querySelector('#form-image-preview')
  
    const statusDropzone = document.querySelector('[file-drop]');
    const statusDropzonePreview = document.querySelector('[file-drop-preview]');
  
    const fileCollection = [];
    const fileDropzoneCollection = [];
  
    const events = [
      'dragenter',
      'dragleave',
      'dragover', // to allow drop
      'drop'
    ];
    events.forEach(e => {
      statusDropzone.addEventListener(e, (ev) => {
        ev.preventDefault();
        if (ev.type === 'dragenter') {
          statusDropzone.classList.add('solid-border');
        }
        if (ev.type === 'dragleave') {
          statusDropzone.classList.remove('solid-border');
        }
        if(ev.type === 'drop') {
          statusDropzone.classList.remove('solid-border');
          [].slice.call(ev.dataTransfer.files).map(f => fileDropzoneCollection.push(f));
          renderCollection(fileDropzoneCollection, statusDropzonePreview);
        }
      })
    })
  
  
    document.querySelector('#pictures').addEventListener('change', (e) => {
      const formData = extractFormData('#statusForm');
      while (fileCollection.length) {
        fileCollection.pop();
      }
      [].slice.call(formData.pictures).map(f => fileCollection.push(f));
  
      renderCollection(fileCollection, preview);
    });
  });