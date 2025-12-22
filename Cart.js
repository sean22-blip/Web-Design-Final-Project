const standard = document.getElementById("standard");
const total = document.getElementById("total");
const fast = document.getElementById("fast");
const express = document.getSelection("express");
const select = document.getElementById("item");
const coupon = document.getElementById("coupon");
function updateTotal(){
    total.textContent = select.value;
}