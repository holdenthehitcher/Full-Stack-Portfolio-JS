function sendEmail() {
    const name = $('.field #name').val()
    const email = $('.field #email').val()
    const message = $('.field #message').val()
    window.location.href = 'mailto:crash33mlb@yahoo.com?subject=Job Opportunity from ' + name + ' (' + email + ') ' + '&body=' + message;
}