import { useState } from "react";
import ArrowIcon from "../assets/icon_arrow.svg";
import "@szhsin/react-accordion/"

const Help = () => {
  const ACCORDION_LIST = [
    {
      id: 1,
      title: "How much does premium cost ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate, iure sed sapiente eaque corporis quibusdam eos unde molestiae necessitatibus error. At rerum accusamus consequuntur minima id itaque non quibusdam distinctio nesciunt ut enim animi exercitationem asperiores necessitatibus incidunt quaerat quam natus recusandae, illo repudiandae consequatur. Expedita architecto fugiat reprehenderit.",
    },
    {
      id: 2,
      title: "How much does premium cost ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate, iure sed sapiente eaque corporis quibusdam eos unde molestiae necessitatibus error. At rerum accusamus consequuntur minima id itaque non quibusdam distinctio nesciunt ut enim animi exercitationem asperiores necessitatibus incidunt quaerat quam natus recusandae, illo repudiandae consequatur. Expedita architecto fugiat reprehenderit.",
    },
    {
      id: 3,
      title: "How much does premium cost ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate, iure sed sapiente eaque corporis quibusdam eos unde molestiae necessitatibus error. At rerum accusamus consequuntur minima id itaque non quibusdam distinctio nesciunt ut enim animi exercitationem asperiores necessitatibus incidunt quaerat quam natus recusandae, illo repudiandae consequatur. Expedita architecto fugiat reprehenderit.",
    },
    {
      id: 4,
      title: "How much does premium cost ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate, iure sed sapiente eaque corporis quibusdam eos unde molestiae necessitatibus error. At rerum accusamus consequuntur minima id itaque non quibusdam distinctio nesciunt ut enim animi exercitationem asperiores necessitatibus incidunt quaerat quam natus recusandae, illo repudiandae consequatur. Expedita architecto fugiat reprehenderit.",
    },
    {
      id: 5,
      title: "How much does premium cost ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate, iure sed sapiente eaque corporis quibusdam eos unde molestiae necessitatibus error. At rerum accusamus consequuntur minima id itaque non quibusdam distinctio nesciunt ut enim animi exercitationem asperiores necessitatibus incidunt quaerat quam natus recusandae, illo repudiandae consequatur. Expedita architecto fugiat reprehenderit.",
    },
  ];

  const [selected, setSelected] = useState(0);

  const handleOpenAccordion = (value) => {
    if (selected === value) {
      setSelected(0);
    } else {
      setSelected(value);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h3 className="dashboard-header-title-normal">Dashboard</h3>
          <div className="dashboard-header-title-divider"></div>
          <h3 className="dashboard-header-title-main">Help</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="plan-main-text">
          <p className="plan-main-para">
            For any issue, please don't hesitate to reach out to us at:{" "}
            <span className="plan-main-para-span">flipchat@link.com</span>
          </p>
        </div>

        <div className="help-accordion">
          <h3 className="help-accordion-title">Frequently Asked Questions</h3>
          <p className="help-accordion-para">
            Your time is precious, so we have assembled some quick answers to
            questions you may have about{" "}
            <span className="plan-main-para-span">Flipchat.link</span>
          </p>

          <div className="help-accordion-faq">
            {ACCORDION_LIST?.map((item) => {
              return (
                <div key={item.id} className={`faq-item ${selected === item.id ? "open-accordion": ""}`} onClick={() => handleOpenAccordion(item.id)}>
                  <div className="faq-item-title">
                    <p className="faq-item-title-text">
                      {item?.title}
                    </p>
                    <img
                      src={ArrowIcon}
                      alt="arrow icon"
                      className="faq-item-title-icon"
                    />
                  </div>
                  <div className="faq-item-content">
                    <p className="faq-item-content-text">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
