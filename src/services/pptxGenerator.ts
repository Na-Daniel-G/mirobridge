import PptxGenJS from "pptxgenjs";

/**
 * Function to generate a PowerPoint presentation
 */
const generatePPTX = () => {
    const pptx = new PptxGenJS();

    // Create a new slide
    const slide = pptx.addSlide();

    // Add title to the slide
    slide.addText("Hello World!", { x: 1, y: 1, fontSize: 18, color: "000000" });

    // Save the presentation
    pptx.writeFile({ fileName: "SamplePresentation.pptx" });
};

export default generatePPTX;
