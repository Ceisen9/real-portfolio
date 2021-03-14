$(document).ready(function() {
  $('#myContainer').multiscroll({
    sectionsColor: ['#FFFFF3', '#566270', '#566270', '#566270'],
    anchors: ['first', 'second', 'third'],
    menu: '#menu',
    navigation: true,
    navigationTooltips: ['Welcome', 'About', 'Contact'],
    loopBottom: false,
    loopTop: false,
    scrollingSpeed: 200,
    touchSensitivity: 5,
    navigationPosition: 'left',
    css3: true,
  });
});

// $(document).ready(function() {
//     $('#multiscroll').multiscroll({
//         verticalCentered : true,
//
//         easing: 'easeInQuart',
//         menu: false,
//         sectionsColor: [],
//         navigation: false,
//         navigationPosition: 'right',
//         navigationColor: '#000',
//         navigationTooltips: [],
//         loopBottom: false,
//         loopTop: false,
//         css3: false,
//         paddingTop: 0,
//         paddingBottom: 0,
//         normalScrollElements: null,
//         keyboardScrolling: true,
//         touchSensitivity: 5,
//
//         // Custom selectors
//         sectionSelector: '.ms-section',
//         leftSelector: '.ms-left',
//         rightSelector: '.ms-right',
//
//         //events
//         onLeave: function(index, nextIndex, direction){},
//         afterLoad: function(anchorLink, index){},
//         afterRender: function(){},
//         afterResize: function(){},
//     });
// });
