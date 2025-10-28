document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const icon = document.getElementById('searchIcon');

  input.addEventListener('focus', () => {
    icon.classList.add('hidden');                  // إخفاء الأيقونة
    input.classList.add('no-placeholder');         // إخفاء الـ placeholder
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      icon.classList.remove('hidden');             // إظهار الأيقونة إذا ما كتب شي
      input.classList.remove('no-placeholder');    // إظهار الـ placeholder
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count h3');

  counters.forEach(counter => {
    const targetText = counter.textContent;
    const targetNumber = parseInt(targetText.replace(/\D/g, '')); // استخراج الرقم فقط
    let current = 0;

    const increment = Math.ceil(targetNumber / 100); // سرعة العد
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        counter.textContent = targetText; // عرض الرقم الأصلي مع +
        clearInterval(interval);
      } else {
        counter.textContent = current + '+';
      }
    }, 30); // سرعة التحديث
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.count');

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      // تبديل اللون
      box.classList.toggle('active');

      // استخراج النص من <p>
      const sectionName = box.querySelector('p').textContent;

      // عرض تنبيه
      alert(`You clicked on: ${sectionName}`);
    });
  });
});
