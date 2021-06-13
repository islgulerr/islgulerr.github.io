$(document).ready(function() {
    var url = 
    "https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler/4346"
    $.getJSON(url, function(data) {
    var html = "";
    $.each(data,function() { 
        html = "<h2>" + data.Tur + "</h2>";
        html += "<h2>" + data.Adi + "</h2>";

        html+= "<img src=" + data.Resim + ">";
        html+= "<h2>" + data.Aciklama + "</h2>";
        
    });
    $("#events_sergi").html(html);
    });
    });

$(document).ready(function() {
    var url = 
    "https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler/4340"
    $.getJSON(url, function(data) {
    var html = "";
    $.each(data,function() { 
        html = "<h2>" + "YARIŞMA" + "</h2>";
        html += "<h2>" + data.Adi + "</h2>";

        html+= "<img src=" + data.Resim + ">";
        html+= "<h2>" + data.Aciklama + "</h2>";
        
    });
    $("#events_yarisma").html(html);
    });
    });   