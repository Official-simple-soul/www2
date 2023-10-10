let last_block = Math.floor(Math.random() * 300) + 562712;

const generate_tx = () => {
  const generate_address = () => {
    let new_address = '0x';
    const all_chars = 'cfbaehrtCFBAEHRT0123456789';
    for (let x = 0; x < 16; x++) {
      new_address += all_chars[Math.floor(Math.random() * all_chars.length)];
    }
    return new_address;
  };
  if (Math.ceil(Math.random()) == 1) last_block = last_block + 1;
  let amount = parseFloat(Math.floor(Math.random() * 2) + '.' + Math.floor(Math.random() * 10));
  if (amount == 0) amount = 0.1;
  let fee = (amount / 100 * 5).toFixed(5);
  return `<li class="transactions__item" style="margin-bottom: 5px">
    <div class="transactions__item-info transactions__item-from">${generate_address()}...</div>
    <div class="transactions__item-info transactions__item-block">${last_block}</div>
    <div class="transactions__item-info transactions__item-to">${generate_address()}...</div>
    <div class="transactions__item-info transactions__item-age">just now</div>
    <div class="transactions__item-info transactions__item-value">${amount} ETH</div>
    <div class="transactions__item-info transactions__item-fee">${fee}</div>
  </li>`;
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    for (let x = 0; x < 5; x++) {
      const code = generate_tx();
      $('#txs').prepend(code);
    }
    setInterval(() => {
      const code = generate_tx();
      $('#txs').prepend(code);
      if (document.querySelectorAll('.transactions__item').length > 5) {
        document.querySelectorAll('.transactions__item')[document.querySelectorAll('.transactions__item').length - 1].remove();
      }
    }, 5000);
  } catch(err) {
    console.log(err);
  }
});