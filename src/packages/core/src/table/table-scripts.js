window.setTimeout(function() {
  /* scrollable-table.html perfect scrollbar */
  const scrSections = document.querySelector('#scr-table__sections');
  const scrScrollable = document.querySelector('#scr-table__section_scrollable');
  const scrPs = new PerfectScrollbar(scrScrollable);

  scrScrollable.addEventListener('ps-scroll-right', () => {
    scrSections.classList.add('_e_table__section_left-shadow_on');
  });

  scrScrollable.addEventListener('ps-x-reach-start', () => {
    scrSections.classList.remove('_e_table__section_left-shadow_on');
  });

  scrScrollable.addEventListener('ps-scroll-left', () => {
    scrSections.classList.add('_e_table__sections_shadow_on');
  });

  scrScrollable.addEventListener('ps-x-reach-end', () => {
    scrSections.classList.remove('_e_table__sections_shadow_on');
  });

  /* advanced-table.html perfect scrollbar */
  const advSections = document.querySelector('#adv-table__sections');
  const advFixed = document.querySelector('#adv-table__section_fixed');
  const advScrollable = document.querySelector('#adv-table__section_scrollable');
  const advPs = new PerfectScrollbar(advScrollable);

  advScrollable.addEventListener('ps-scroll-right', () => {
    advFixed.classList.add('_e_table__section_shadow_on');
  });

  advScrollable.addEventListener('ps-x-reach-start', () => {
    advFixed.classList.remove('_e_table__section_shadow_on');
  });

  advScrollable.addEventListener('ps-scroll-left', () => {
    advSections.classList.add('_e_table__sections_shadow_on');
  });

  advScrollable.addEventListener('ps-x-reach-end', () => {
    advSections.classList.remove('_e_table__sections_shadow_on');
  });

  /* advanced-table.html indeterminate checkbox */
  document.querySelector('#indeterminate-checkbox').indeterminate = true;
}, 3000);
