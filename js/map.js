(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
({key: "AIzaSyBwEgNTiac_Mo3sW9GWFYgj0S99qzufXHc", v: "weekly"});

let new_map;

async function initMap(){
    const position = {
        lat: 30.202218,
        lng: -95.087100
    }

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    new_map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: position, 
        mapId: "WEB_MAP"
    });

    const marker = new AdvancedMarkerElement({
        map: new_map,
        position: position,
        title: "ConstruTex Location"
    });
}

window.onload = function() {
    initMap()
}