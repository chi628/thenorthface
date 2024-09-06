document.addEventListener('DOMContentLoaded', () => {
  console.log('hihi')
  document.getElementById('coupon-exchange-btn').addEventListener('click', () => {
    const modal = document.getElementById('bottle-coupon-modal')

    if (modal) {
      if (modal.classList.contains('close')) {
        modal.classList.remove('close')
      }
      modal.classList.add('show')
    }
  })

  document.getElementById('coupon-modal-cancel').addEventListener('click', () => {
    const modal = document.getElementById('bottle-coupon-modal')

    if (modal) {
      if (modal.classList.contains('show')) {
        modal.classList.remove('show')
      }
      modal.classList.add('close')
    }
  })

  document.getElementById('coupon-modal-exchange').addEventListener('click', () => {
    const modal = document.getElementById('bottle-coupon-modal')

    if (modal) {
      if (modal.classList.contains('show')) {
        modal.classList.remove('show')
      }
      modal.classList.add('close')
    }

    const coupon = document.getElementById('bottle-coupon')

    if (coupon) {
      coupon.classList.add('disabled')
    }
  })
})

// document.addEventListener('DOMContentLoaded', function () {
//   const app = document.getElementById('app');

//   function loadComponent(id) {
//       const template = document.getElementById(id);
//       if (template) {
//           // 複製模板的內容並插入到 app 中
//           const clone = document.importNode(template.content, true);
//           app.innerHTML = ''; // 清除先前的內容
//           app.appendChild(clone);
//       }
//   }

//   // 示例：根據某個條件載入元件
//   const condition = 'component1'; // 這裡可以根據實際需求設定
//   loadComponent(condition);

//   // 你可以根據不同條件切換顯示不同的元件
//   document.getElementById('toggleButton').addEventListener('click', function() {
//       loadComponent('component2');
//   });
// });
