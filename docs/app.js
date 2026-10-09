/* The examples are local data. Inference runs in the linked demo. */
(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  let task = 'classification', caseIndex = 0, view = 'prediction';
  const descriptions = {
    classification:'Compare the degraded and restored image. These examples illustrate how the restoration process changes visual evidence.',
    detection:'Inspect the restored image and the frozen model’s predicted bounding boxes.',
    segmentation:'Switch between the restored scene and its predicted semantic segmentation map.'
  };

  function updateComparison() {
    const entry = window.CASES[task][caseIndex];
    const suffix = view === 'prediction' && task !== 'classification' ? 'Prediction' : '';
    $('#comparison-before').src = entry['before' + suffix];
    $('#comparison-after').src = entry['after' + suffix];
    const content = suffix ? (task === 'detection' ? 'object detections' : 'semantic segmentation') : 'image';
    $('#comparison-before').alt = `${entry.name}: ${content} before restoration`;
    $('#comparison-after').alt = `${entry.name}: ${content} after AgenticTDIR restoration`;
    $('#case-dataset').textContent = entry.dataset;
    $('#case-title').textContent = entry.name;
    $('#case-description').textContent = descriptions[task];
    $('#case-result').textContent = entry.detections ? `Predicted objects: ${entry.detections[0]} before · ${entry.detections[1]} after` : '';
    $('.view-switch').hidden = task === 'classification';
    $$('.view-switch button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    $('#comparison-slider').value = 50;
    $('.comparison').style.setProperty('--split', '50%');
    $('#comparison-slider').setAttribute('aria-valuetext', '50 percent degraded input');
  }

  function chooseTask(value) {
    task = value;
    caseIndex = {classification:0, detection:7, segmentation:6}[task];
    $('#example-panel').setAttribute('aria-labelledby', `task-${task}`);
    $('#case-select').replaceChildren(...window.CASES[task].map((entry, i) => {
      const option = document.createElement('option'); option.value = i;
      option.textContent = `${String(i + 1).padStart(2,'0')} · ${entry.name}`; return option;
    }));
    $('#case-select').value = caseIndex;
    updateComparison();
  }

  function bindTabs(attribute, callback) {
    const buttons = $$(`[${attribute}]`);
    function activate(button) {
      buttons.forEach(item => {const selected = item === button; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1;});
      callback(button.getAttribute(attribute));
    }
    buttons.forEach((button,index) => {
      button.addEventListener('click', () => activate(button));
      button.addEventListener('keydown', event => {
        if (!['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length-1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
        buttons[next].focus(); activate(buttons[next]);
      });
    });
  }

  if (!window.CASES) {
    $('#case-description').textContent = 'Example data could not be loaded. Refresh the page, or open the interactive demo on Hugging Face.';
    return;
  }
  bindTabs('data-task', chooseTask);
  $('#case-select').addEventListener('change', event => {caseIndex = Number(event.target.value); updateComparison();});
  $('#comparison-slider').addEventListener('input', event => {
    $('.comparison').style.setProperty('--split', `${event.target.value}%`);
    event.target.setAttribute('aria-valuetext', `${event.target.value} percent degraded input`);
  });
  $$('.view-switch button').forEach(button => button.addEventListener('click', () => {view = button.dataset.view; updateComparison();}));
  chooseTask(task);

  $$('[data-language]').forEach(button => button.addEventListener('click', () => {
    if(button.getAttribute('aria-pressed')==='true')return;
    const language=button.dataset.language,video=$('#demo-video'); video.pause();
    video.src=`assets/videos/${language}.mp4`;
    video.setAttribute('aria-label',`AgenticTDIR ${language === 'english' ? 'English' : 'Chinese'} demonstration video`);
    video.load();
    $$('[data-language]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    $('#video-external').href='https://github.com/user-attachments/assets/'+(language==='english'?'45dde995-e7be-4d9a-8a0e-a886a2a00c2d':'3c7b2fd3-4780-4619-8199-3474468d9b97');
  }));
  const dialog=$('.figure-dialog');let figureOpener;
  $$('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{
    figureOpener=button;$('#enlarged-image').src=button.dataset.zoom;$('#enlarged-image').alt=button.dataset.caption;$('#figure-title').textContent=button.dataset.caption;dialog.showModal();
  }));
  $('#close-figure').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>figureOpener?.focus());
  const menu=$('.menu-button'),links=$('#nav-links');
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');links.classList.toggle('open',open);});
  function closeMenu(){links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
  $$('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&links.classList.contains('open')){closeMenu();menu.focus();}});
  const navLinks=$$('.nav-links a'), sections=$$('main>section[id]');
  let navUpdatePending=false;
  function updateNavigation(){
    navUpdatePending=false;
    const focusLine=Math.max(110,window.innerHeight*.2);
    let current='';
    sections.forEach(section=>{if(section.getBoundingClientRect().top<=focusLine)current=`#${section.id}`;});
    navLinks.forEach(link=>{const active=link.getAttribute('href')===current;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  }
  function scheduleNavigationUpdate(){if(!navUpdatePending){navUpdatePending=true;requestAnimationFrame(updateNavigation);}}
  window.addEventListener('scroll',scheduleNavigationUpdate,{passive:true});
  window.addEventListener('resize',scheduleNavigationUpdate);
  window.addEventListener('load',scheduleNavigationUpdate);
  updateNavigation();
})();
