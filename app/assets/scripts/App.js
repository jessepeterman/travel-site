import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import $ from 'jquery';
import Modal from './modules/Modal.js';


var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
var stickyHeader = new StickyHeader();
new RevealOnScroll($(".testimonial"), "80%");
new RevealOnScroll($(".feature-item"), "85%");
var modal = new Modal();
