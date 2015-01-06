<!DOCTYPE html>
<html lang="en" class="f9f9f9_bg" manifest="/hs_cca/cache.appcache">
    <head>        
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" />
        <link rel="icon" href="/hs_cca/images/favicon.ico" type="image/x-icon" />
        <link rel="author" href="/hs_cca/humans.txt" />
        <title>CCA Website (FAQ and Forum)</title>
        <meta name="description" content="Hwa Chong PE and CCA Website" />
        <meta name="keywords" content="CCA, PE, Sports" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/hs_cca/scripts/detect-mobile.js"></script>
        
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,700,300' rel='stylesheet' type='text/css' />
    	<!--[if lte IE 9]>
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400" type='text/css'/> 
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:700" type='text/css'/> 
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300" type='text/css'/>
            
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic" type='text/css'/> 
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300italic" type='text/css'/> 
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:700italic" type='text/css'/>
        <![endif]-->
        
        <style>
            ol li{
                color: #BBB;
                font-size: 30px;
                font-weight: bold;
                font-style: italic;
            }

            ol li *{
                font-weight: normal;
                font-style: normal;
            }

            ol li *:not(a) {
                color: #302D2D;
            }

            ol li h3{
                font-size: 18px;
                font-weight: 300;
            }
        </style>
        <link rel="stylesheet" href="/hs_cca/styles/main.css" type="text/css" />
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <!--[if lte IE 9]>
            <script src="/hs_cca/html5shiv/dist/html5shiv.js"></script>
            <script src="/hs_cca/html5shiv/dist/html5shiv-printshiv.js"></script>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js">IE7_PNG_SUFFIX=".png";</script>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <![endif]-->
        <!--[if gt IE 9]><!-->
            <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <!--<![endif]-->
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
        <script src="/hs_cca/scripts/javascript.js"></script>
    </head>
    <body>
        <!--header-->
        <!--<div id="menu_toggle">
	        <div id="menu_toggle_tab">Menu</div>
        </div>-->
        <div id="header-filler"></div>
        <header class="disableSelect">
            <div id="navbar">
                <div id="menu">
                    <div id="m1" class="navbarmenu" data-link="0">
                        <a href="/hs_cca/"><div class="menu_tab" id="tab1">Home</div></a>
                    </div>
                    <div id="m2" class="navbarmenu" data-link="2">
                        <a href="/hs_cca/cca/"><div class="menu_tab" id="tab2">The CCAs</div></a>
                        <div id="sub2" class="sub_menu">
                            <div id="sub_search" class="sub_menu_tab" >
	                            <div class="corner"></div>
                            	<input type="search" id="ccasearch" placeholder="Search CCAs" autocomplete="off" onfocus="ccasearchf(1)" onblur="ccasearchf(0)" />
                                <div class="corner"></div>
                            </div>                        
                        	<a href="/hs_cca/cca/sports/" class="sub_link"><div class="sub_menu_tab first_tab">Sports</div></a>
                        	<a href="/hs_cca/cca/ug/" class="sub_link"><div class="sub_menu_tab">Uniform Groups</div></a>
                        	<a href="/hs_cca/cca/aesthetics/" class="sub_link"><div class="sub_menu_tab">Aesthetics</div></a>
                        	<a href="/hs_cca/cca/clubs/" class="sub_link"><div class="sub_menu_tab">Clubs &amp; Societies</div></a>
                        </div>
                    </div>
                    <div id="m3" class="navbarmenu" data-link="3">
					    <a href="/hs_cca/guides/"><div class="menu_tab" id="tab3">Guides</div></a>
                        <div id="sub3" class="sub_menu">
                        	<a href="/hs_cca/guides/cca/" class="sub_link"><div class="sub_menu_tab first_tab">The Right CCA</div></a>
                        	<a href="/hs_cca/guides/tips/" class="sub_link"><div class="sub_menu_tab">Tips</div></a>
                        	<a href="/hs_cca/guides/life/" class="sub_link"><div class="sub_menu_tab">CCA Life</div></a>
                        </div>
                    </div>
                    <div id="m4" class="navbarmenu" data-link="4">
					    <a href="/hs_cca/stories/"><div class="menu_tab" id="tab4">Stories</div></a>
                        <div id="sub4" class="sub_menu">
                        	<a href="/hs_cca/stories/articles/" class="sub_link"><div class="sub_menu_tab first_tab">Articles</div></a>
                        	<a href="/hs_cca/stories/testimonials/" class="sub_link"><div class="sub_menu_tab">Testimonials</div></a>
                        	<a href="/hs_cca/stories/feature/" class="sub_link"><div class="sub_menu_tab">Featured Atheletes</div></a>
                        </div>
                    </div>
                    <div id="m5" class="navbarmenu" data-link="0">
                        <a href=""><div class="menu_tab" id="tab5">FAQ &amp; Forum</div></a>
                    </div>
                    <div id="m6" class="navbarmenu" data-link="0">
                        <a href="/hs_cca/about/"><div class="menu_tab" id="tab6">About/Contact</div></a>
                    </div>
                    <div id="search-area">
                        <img src="/hs_cca/images/icon_searchi.png" alt="search" id="search-iconi">
                        <img src="/hs_cca/images/icon_searcha.png" alt="search" id="search-icona" style="display: none">
                        <div id="search">
                            <div class="corner"></div>
                            <input id="search-input" type="search" autocomplete="off" onfocus="searchf(1)" onblur="searchf(0)" placeholder="Search Site">
                            <div class="corner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--/header-->
        <!--content-->
        <div id="content" class="wrap">
            <div id="content-header">
                <noscript><p id="no-js">You have <strong>not enabled</strong> JavaScript! Many objects on this page will not work properly.</p></noscript>
                <!--[if lt IE 9]>
                <p id="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or use another browser to improve your experience.</p>
                <![endif]-->
                <a href="/hs_cca/" id="headtt">
                    <div id="logo"><img src="/hs_cca/images/logo.png" alt="logo"></div>
                    <h1 id="head-title">PE and CCA</h1>
                    <p></p>
                </a>
            </div>
            <div id="topcontent">
                <h2 id="website-title">FAQ</h2>
                <p>We understand that being under a new environment and system, it may get a little confusing.</p>
                <p>You may have a lot of questions running through your head and it is important that these questions are fully answered.</p>
                <p>As such, here is a list of answers to Frequently Asked Questions. If you have other questions that are still unanswered, or you would like further clarification, please feel free to post in the <a href="forum/">forum</a>.</p>
            </div>
            <div class="hr-divider"></div>
            <div id="faq-content">
                <h3 id="faq">Frequently Asked Questions</h3>
                <ol>
                    <li>
                        <h3>Why do I need to choose a CCA?</h3>
                        <p>CCAs are an integral part of your holistic, well-rounded education. It helps to develop the character and not only focus on academia, but also provides the students with opportunities to develop traits such as resilience, teamwork and leadership.</p>
                        <p>It helps to toughen their mental strength and not succumb to difficulties easily.</p>
                        <p>By working together in a team, CCAs can help develop team spirit and let students know how to co-operate with others. When students take on important roles in the CCAs, they will also be able to hone their leadership skills and learn to lead others.</p>
                    </li>
                    <li>
                        <h3>Why does the school not let you choose priority over categories of CCA?</h3>
                        <p>If the school lets you choose priority over categories of CCA, it would be unfair to the others who are just as good as you or those whose talent can be developed to their full potential. Some could even be better than you but do not realise it until they get allocated to the CCA. Everyone deserves a chance, so just let it be a fair competition.</p>
                    </li>
                    <li>
                        <h3>If I do not get into a CCA of my choice, can I still appeal out of it?</h3>
                        <p>Yes, you can still try to appeal out to another CCA that you want.</p>
                        <p>However, if your appeal is rejected (do not hold high hopes), just try to be committed to your CCA and make friends, so that you can still enjoy the CCA. Every CCA has opportunities for you to showcase your talents, so just be passionate about it. </p>
                    </li>
                    <li>
                        <h3>Why am I not allowed to change my CCA like in my primary school?</h3>
                        <p>The secondary school CCA system is quite different from the primary school CCA system. (See the <a href="/hs_cca/guides/tips/#school-differences">guide</a>)</p>
                        <p>If you quit your original CCA, the development in that particular CCA will not be complete, and you will end up not being able to acquire the relevant skills and maximise your potential fully.</p>
                        <p>You can sometimes still appeal out of your CCA, but this is on a case-by-case basis and appeals are usually only accepted because of valid/special reasons (usually medical).</p>
                    </li>
                    <li>
                        <h3>What is the best CCA for me?</h3>
                        <p>If you are still unsure of what is the best CCA for you, you can check out these <a href="/hs_cca/guides/">guides:</a></p>
                        <p><a href="/hs_cca/guides/cca/">Choosing the Right CCA</a></p>
                        <p><a href="/hs_cca/guides/tips/">Tips and Useful Information</a></p>
                        <p><a href="/hs_cca/guides/life/">CCA Life in Hwa Chong</a></p>
                    </li>
                </ol>
            </div>
            <h3>Question still not answered? <a href="forum/">Proceed to the forum</a>.</h3>
        </div>
        <!--/content-->
        <!--footer-->
        <footer class="wrap">
        	<div id="credits">
                <div id="copyright">
                Unless otherwise noted, this work is licensed under the <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License (CC BY 4.0)</a>.
                </div>
                Created by Samuel Leong, Sun Yudong &amp; Ho Jie Feng for Hwa Chong Institution 2013. Maintained by EC&#179;.&nbsp;Last Edited 2014&nbsp;(&nbsp;<a href="/hs_cca/humans.txt" target="_blank" title="The humans responsible & technology colophon">humans.txt</a>&nbsp;)
                <br/>
                Some design elements inspired by developer.android.com
            </div>
			Change Background: <a onclick="changeBg(this.id);" id="changeBg_light">Light</a> | <a onclick="changeBg(this.id);" id="changeBg_feathers">Feathers</a> | <a onclick="changeBg(this.id);" id="changeBg_brushed">Brushed</a> | <a onclick="changeBg(this.id);" id="changeBg_f9f9f9">White</a>
            <br/>
            <a href="/hs_cca/sitemap/" target="_blank">Sitemap</a>&nbsp;|&nbsp;<a href="/hs_cca/report/">Report an Issue</a>
        </footer>
        <!--/footer-->
        <!--overlays-->
        <div id="move-to-top-wrap">
            <div id="move-to-top"><img src="/hs_cca/images/gototop.png" alt="Move To Top" id="move-top-icon"></div>
        </div>
        <!--/overlays-->
    </body>
</html>