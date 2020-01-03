import React from 'react';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
import img4 from './../assets/4.jpg'

const Carousel = ({styles} : any) =>{
    const isPC = styles.headerWidth > 50;
    const containerStyle = {
        width: "100%",
        maxWidth: 155*10,
        marginTop: !styles.showSidebar ? "50px" : isPC ? "16vh" : "30px",
        position: 'fixed',
        paddingLeft: !styles.showSidebar ? '2px' : "10px",
        backgroundColor: styles.bgColor(0.8),
        marginLeft: isPC || !styles.showSidebar ? 'auto' : styles.headerWidth,
        whiteSpace: 'nowrap',
        overflowX: "auto",
        overflowY: "hidden",
    } as React.CSSProperties;

    const itemStyle = {
        paddingRight: "5px",
        display: "inline-block"
    } as React.CSSProperties;

    const imageSize = {
        width: "150px",
        height: "200px",
        display: "inline-block"
    } as React.CSSProperties;


    return (
        <div style = {containerStyle}>
                <div style = {itemStyle}>
                    <img  style = {imageSize} alt='' src={img1} />
                </div>
                <div style = {itemStyle}>
                    <img style = {imageSize} alt='' src={img2} />
                </div>
                <div style = {itemStyle}>
                    <img style = {imageSize} alt='' src={img3} />
                </div>
                <div style = {itemStyle}>
                    <img style = {imageSize}  alt='' src={img4} />
                </div>
                <div style = {itemStyle}>
                    <img  style = {imageSize} alt='' src={img1} />
                </div>
                <div style = {itemStyle}>
                    <img style = {imageSize} alt='' src={img2} />
                </div>
                <div style = {itemStyle}>
                    <img style = {imageSize} alt='' src={img3} />
                </div>
                <div style = {itemStyle}>
                    <img style = {imageSize}  alt='' src={img4} />
                </div>
        </div>
    );
}

export default Carousel;