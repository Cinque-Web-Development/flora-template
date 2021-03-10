import React from "react";

import "./AboutPage.css";
import pic01 from "../../assets/josephine.jpg";

export default function AboutPage() {
    return (
        <div className="About">
            <h1>About Us</h1>
            <img src={pic01} className="about-photo" alt="purple flowers"/>
            <div className="about-content-wrap">
                <p>
                Sriracha lomo cliche shaman bicycle rights. Green juice pork belly migas 
                lumbersexual small batch, enamel pin narwhal lyft fanny pack fam hammock 
                swag banh mi. Stumptown celiac flannel, lomo readymade shaman vinyl. Artisan 
                hashtag gentrify austin pabst wolf. Marfa yuccie occupy trust fund chia 
                bicycle rights gluten-free franzen banh mi schlitz listicle distillery. 
                Sriracha swag schlitz enamel pin synth migas VHS vexillologist.<br />
                </p>
                <p>
                Gentrify hella bitters fanny pack roof party coloring book kogi, meditation 
                paleo flannel fingerstache godard thundercats XOXO asymmetrical. Drinking 
                vinegar intelligentsia messenger bag, shoreditch lo-fi health goth retro PBR&B 
                portland everyday carry pinterest. Jianbing dreamcatcher poke neutra kale chips, 
                twee cardigan. +1 3 wolf moon salvia man braid, pabst asymmetrical slow-carb 
                mixtape cornhole.<br />
                </p>
                <p>
                Tumeric la croix organic, vice gentrify before they sold out YOLO pitchfork 
                cronut banh mi kitsch ramps chia tbh. Af blue bottle DIY, disrupt green juice 
                flexitarian sartorial subway tile before they sold out cray forage kogi meditation 
                semiotics direct trade. Pitchfork freegan kombucha pop-up, direct trade bicycle 
                rights viral meditation kickstarter aesthetic raclette. Ethical microdosing irony 
                90's DIY occupy scenester williamsburg live-edge yr tumeric activated charcoal 
                freegan asymmetrical cred. Aesthetic sartorial wolf banjo flannel, artisan tbh 
                church-key ennui air plant. Gentrify man braid try-hard yuccie lo-fi, selvage 
                gastropub leggings lomo 8-bit cold-pressed vaporware shaman edison bulb. Lomo 
                kombucha blog farm-to-table actually you probably haven't heard of them mlkshk 
                viral small batch scenester.
                </p>
            </div>
        </div>
    )
}
