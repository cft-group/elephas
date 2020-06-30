window.setTimeout(function() {
  const sections = document.querySelector('._e_table__sections');
  const fixed = document.querySelector('._e_table__section_fixed');
  const scrollable = document.querySelector('._e_table__section_scrollable');
  const ps = new PerfectScrollbar(scrollable);

  scrollable.addEventListener('ps-scroll-right', () => {
    fixed.classList.add('_e_table__section_shadow_on');
  });

  scrollable.addEventListener('ps-x-reach-start', () => {
    fixed.classList.remove('_e_table__section_shadow_on');
  });

  scrollable.addEventListener('ps-scroll-left', () => {
    sections.classList.add('_e_table__sections_shadow_on');
  });

  scrollable.addEventListener('ps-x-reach-end', () => {
    sections.classList.remove('_e_table__sections_shadow_on');
  });

  document.querySelector('#indeterminate-checkbox').indeterminate = true;
}, 2000);
