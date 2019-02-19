$(document).ready(() => {
  if ($(window).width() <= 768) {
    $('#button').on('click', () => {
      $('#smallInfoBox').addClass('openSmall') && $('#smallButton').addClass('hideSmall')
    })
    $('#infoClose').on('click', () => {
      $('#smallInfoBox').removeClass('openSmall') && $('#smallButton').removeClass('hideSmall')
    })
  } 
  else {
    $('#button').on('click', () => {
      $('#infoBox').addClass('open') && $('#button').addClass('hide')
    })
    $('#infoClose').on('click', () => {
      $('#infoBox').removeClass('open') && $('#button').removeClass('hide')
    })
  }
})


