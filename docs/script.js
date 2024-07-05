document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tableNumber = document.getElementById('table-number').value;
    const items = Array.from(document.querySelectorAll('input[name="item"]:checked')).map((item, index) => {
        let quantity = document.querySelectorAll('input[name="quantity"]')[index].value;
        if (!quantity) {
            quantity = 1;
        }
        const note = document.querySelectorAll('input[name="note"]')[index].value;
        const noteText = note ? `, Observações: ${note}` : ''; // Alterado
        return `${item.value} - Quantidade: ${quantity}${noteText}`;
    }).join('\n');

    const orderMessage = `Mesa: ${tableNumber}\nItens:\n${items}`;
    
   const whatsappNumber = '5588994871679'; // Número do WhatsApp do atendimento
     // const whatsappNumber = '5588997833941'; // Número do WhatsApp do atendimento
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

    window.open(whatsappURL, '_blank');

    location.reload();
});




