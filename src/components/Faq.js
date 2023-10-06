import React from 'react'
import "../css/faq.css";
import doodle from "../assets/doodle1.png";


const Faq = () => {
    return (
        <>

            <div className="head">Frequently asked questions</div>
            <section className="faq">
                <div class="accordion">
                    <div class="item acive">
                        <p class="number">01</p>
                        <h2>What is Custard?</h2>
                        <div class="iconOpen">
                            <ion-icon class="icon" name="add-outline"></ion-icon>
                        </div>
                        <div class="iconClose"><ion-icon name="close-outline" class="icon"></ion-icon></div>
                        <div class="hidden-box">
                            <p>
                                Custard is a communication tool that helps passionate communities in a city stay connected. We have built-in features such as chat, discussion forums, events and groups that help you share information with likeminded people in your area.
                            </p>
                        </div>
                    </div>





                    <div class="item">
                        <p class="number">02</p>
                        <h2>How does Custard work?</h2>
                        <div class="iconOpen">
                            <ion-icon class="icon" name="add-outline"></ion-icon>
                        </div>
                        <div class="iconClose"><ion-icon name="close-outline" class="icon"></ion-icon></div>
                        <div class="hidden-box">
                            <p>
                                After downloading the app from the App Store or Google Play, you can set up an account with just a few clicks. From there, you can join existing groups or start your own group to share information with other members of your community who are interested in similar topics.
                            </p>
                        </div>
                    </div>



                    <div class="item">
                        <p class="number">03</p>
                        <h2>Do I need to be in a specific location to use Custard?</h2>
                        <div class="iconOpen">
                            <ion-icon class="icon" name="add-outline"></ion-icon>
                        </div>
                        <div class="iconClose"><ion-icon name="close-outline" class="icon"></ion-icon></div>
                        <div class="hidden-box">
                            <p>
                                No! You don’t need to live close by anyone else using Custard; you can connect and interact with people from all over the world!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lap-img">
                    <img src={doodle} alt="" className="limg" />
                </div>
            </section>
        </>
    )
}

const ourItemDiv = document.getElementsByClassName('item');
const openIcon = document.getElementsByClassName('iconOpen');
const closeIcon = document.getElementsByClassName('iconClose');

for (let i = 0; i < ourItemDiv.length; i++) {

    closeIcon[i].style.display = "none";
    ourItemDiv[i].addEventListener('click', () => {
        const result = ourItemDiv[i].classList.toggle("active");

        if (result) {
            closeIcon[i].style.display = "block";
            openIcon[i].style.display = "none";
        }
        else {
            closeIcon[i].style.display = "none";
            openIcon[i].style.display = "block";
        }
    });
}


export default Faq
