
function getTextElementValueById(elementId) {
    // subtotal
    const phoneSubTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneSubTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(element, value) {
    const subTotalElement = document.getElementById(element);
    subTotalElement.innerText = value;
}

function calcluteSubTotal() {
    const phoneTotalPrice = getTextElementValueById('phone-total');
    const caseTotalPrice = getTextElementValueById('case-total');

    const currentSubTotal = phoneTotalPrice + caseTotalPrice;

    setTextElementValueById('sub-total', currentSubTotal);

    // tax amount
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}