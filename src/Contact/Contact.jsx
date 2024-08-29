import React from "react";
import "./Contact.css";
import "../../src/App.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
function Contact() {
  return (
    <div>
      <section className="c-wrapper">
        <div className="innerWidth paddings flexCenter c-container">
          <div className="l-side flexColStart">
            <span className="orangeText">Contact Us</span>
            <span className="primaryText">Easy to Contact Us</span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              We beleive a good
              <br />
              blace to live can make your life better
            </span>

            <div className="flexColStart contactModes">
                {/* 1st Row  */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Call</span>
                                <span className="secondaryText">021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Chat</span>
                                <span className="secondaryText">021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Chat Now
                        </div>
                    </div>
                </div>

                {/* 2nd Row  */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Video Call</span>
                                <span className="secondaryText">021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Video Call Now
                        </div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Message</span>
                                <span className="secondaryText">021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Message Now
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="r-side">
            <div className="image-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
