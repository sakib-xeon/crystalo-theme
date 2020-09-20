import Document, { Html, Head, Main, NextScript } from 'next/document'
//import "../css/style.css";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="UTF-8" />
                    <title>Home One || Crystalo || Responsive HTML 5 Template</title>

                    {/* <!-- responsive meta --> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* <!-- For IE --> */}
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                    {/* <!-- master stylesheet --> */}
                    <link rel="stylesheet" href="css/style.css" />
                    {/* <!-- Responsive stylesheet --> */}
                    <link rel="stylesheet" href="css/responsive.css" />
                    {/* <!-- Favicon --> */}
                    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" href="images/favicon/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="images/favicon/favicon-16x16.png" sizes="16x16" />

                    <script src="js/jquery.js"></script>
                    <script src="js/appear.js"></script>
                    <script src="js/bootstrap.bundle.min.js"></script>
                    <script src="js/bootstrap-select.min.js"></script>
                    <script src="js/isotope.js"></script>
                    <script src="js/jquery.bootstrap-touchspin.js"></script>
                    <script src="js/jquery.countTo.js"></script>
                    <script src="js/jquery.easing.min.js"></script>
                    <script src="js/jquery.enllax.min.js"></script>
                    <script src="js/jquery.fancybox.js"></script>
                    <script src="js/jquery.mixitup.min.js"></script>
                    <script src="js/jquery.paroller.min.js"></script>
                    <script src="js/owl.js"></script>
                    <script src="js/validation.js"></script>
                    <script src="js/wow.js"></script>
                    <script src="js/map-helper.js"></script>

                    <script src="assets/language-switcher/jquery.polyglot.language.switcher.js"></script>
                    <script src="assets/timepicker/timePicker.js"></script>
                    <script src="assets/html5lightbox/html5lightbox.js"></script>

                    {/* <!--Revolution Slider--> */}
                    <script src="plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
                    <script src="plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.actions.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.migration.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
                    <script src="plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
                    <script src="js/main-slider-script.js"></script>

                    {/* <!-- thm custom script --> */}
                    <script src="js/custom.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    
                </body>
            </Html>
        )
    }
}

export default MyDocument