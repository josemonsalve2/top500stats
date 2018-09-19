<!doctype html>
<html lang="en">


<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width" />
    <meta name="keywords" content="">
    <meta name="description" content="">
    
        <meta name="Googlebot-News" content="noindex, nofollow">
    
    <title>
        Efficiency, Power, Cores... | TOP500 Supercomputer Sites</title>
    <link rel="shortcut icon" href="/static/img/favicon.ico">

    
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/news/feeds/rss/">
        <link rel="alternate" type="application/atom+xml" title="Atom" href="/news/feeds/atom/">
    

    
        <link rel="stylesheet" href="/static/css/bootstrap.css">
        <link rel="stylesheet" href="/static/css/mezzanine.css">
        <link rel="stylesheet" href="/static/css/bootstrap-theme.css">
        <link rel="stylesheet" href="/static/css/top500.css">


        

        
            
        
    

    <script type="text/javascript">var switchTo5x = true;</script>
    <script src="https://www.google.com/jsapi?key=ABQIAAAAjBc6iR40aJtAwcj9HMZBYhRJaxAAofxHq0gEaifsfToGnpixdBQJC_bTjQIXv67MMRk0TIy-pv04GQ"
            type="text/javascript"></script>
    <script type='text/javascript' src='https://partner.googleadservices.com/gampad/google_service.js'></script>


    <script type='text/javascript'>
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        (function () {
            var gads = document.createElement('script');
            gads.async = true;
            gads.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') +
                '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        })();
    </script>

    <script type='text/javascript'>
        googletag.cmd.push(function () {
            
            googletag.defineSlot('/2924242/leaderboard', [728, 90], 'div-gpt-ad-1416441378536-15').addService(googletag.pubads());
            googletag.defineSlot('/2924242/mobile_leaderboard', [320, 50], 'div-gpt-ad-1488790360617-0').addService(googletag.pubads());
            
            googletag.defineSlot('/2924242/2013_square_popup_1', [250, 250], 'div-gpt-ad-1416441378536-5').addService(googletag.pubads());
            googletag.defineSlot('/2924242/2013_square_popup_2', [250, 250], 'div-gpt-ad-1453380928566-0').addService(googletag.pubads());
            googletag.defineSlot('/2924242/2013_square_popup_3', [250, 250], 'div-gpt-ad-1509611081669-0').addService(googletag.pubads());

            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
    </script>

    
        <script src="/static/mezzanine/js/jquery-1.8.3.min.js"></script>
        <script src="/static/js/bootstrap.js"></script>
        <script src="/static/js/bootstrap-extras.js"></script>
        
 <script type="text/javascript" src="/static/js/amcharts.js"></script>
  <script type="text/javascript">
            var chart;

            var chartData = [
            // scatter points
            
            
             {
             	rank: 1,
             	eff: 15371.00,
             	conf: 'Sunway MPP, Sunway SW26010 260C 1.45GHz, Sunway',
             	color: '#6495ED'
             },
             
             
            
             {
             	rank: 2,
             	eff: 17808.00,
             	conf: 'TH-IVB-FEP Cluster, Intel Xeon E5-2692 12C 2.200GHz, TH Express-2, Intel Xeon Phi 31S1P',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 3,
             	eff: 8209.00,
             	conf: 'Cray XK7, Opteron 6274 16C 2.200GHz, Cray Gemini interconnect, NVIDIA K20x',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 4,
             	eff: 7890.00,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60 GHz, Custom',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 5,
             	eff: 12659.89,
             	conf: 'K computer, SPARC64 VIIIfx 2.0GHz, Tofu interconnect',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 6,
             	eff: 3945.00,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 7,
             	eff: 4232.63,
             	conf: 'Cray XC40, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 8,
             	eff: 1753.66,
             	conf: 'Cray XC30, Xeon E5-2670 8C 2.600GHz, Aries interconnect , NVIDIA K20x',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 9,
             	eff: 3615.00,
             	conf: 'Cray XC40, Xeon E5-2680v3 12C 2.5GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 10,
             	eff: 2834.00,
             	conf: 'Cray XC40, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 11,
             	eff: 4150.00,
             	conf: 'SGI ICE X, Xeon Xeon E5-2670/ E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 12,
             	eff: 4510.00,
             	conf: 'PowerEdge C8220, Xeon E5-2680 8C 2.700GHz, Infiniband FDR, Intel Xeon Phi SE10P',
             	color: '#A9A9A9'
             },
             
             
            
             {
             	rank: 13,
             	eff: 2301.00,
             	conf: 'BlueGene/Q, Power BQC 16C 1.600GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 14,
             	eff: 1972.00,
             	conf: 'BlueGene/Q, Power BQC 16C 1.600GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 15,
             	eff: 3380.00,
             	conf: 'SGI ICE X, Intel Xeon E5-2670/E5-2680v2/E5-2680v3  2.6/2.8/2.5 GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 16,
             	eff: 1800.00,
             	conf: 'Cray XC30, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 17,
             	eff: 1897.02,
             	conf: 'Cray XC40, Xeon E5-2695v4 18C 2.1GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 18,
             	eff: 1897.02,
             	conf: 'Cray XC40, Xeon E5-2695v4 18C 2.1GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 19,
             	eff: 1498.90,
             	conf: 'Cray CS-Storm, Intel Xeon E5-2660v2 10C 2.2GHz, Infiniband FDR, Nvidia K40',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 20,
             	eff: 1498.90,
             	conf: 'Cray CS-Storm, Intel Xeon E5-2660v2 10C 2.2GHz, Infiniband FDR, Nvidia K40',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 21,
             	eff: 5175.00,
             	conf: 'SGI ICE X, Xeon E5-2699v3 18C 2.3GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 22,
             	eff: 1227.00,
             	conf: 'iDataPlex DX360M4, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR, NVIDIA K20x',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 23,
             	eff: 1652.40,
             	conf: 'Fujitsu PRIMEHPC FX100, SPARC64 XIfx  32C 1.98GHz, Tofu interconnect 2',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 24,
             	eff: 6327.55,
             	conf: 'Cray XC30, Intel Xeon E5-2697v2 12C 2.7GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 25,
             	eff: 4819.50,
             	conf: 'SGI ICE X, Xeon E5-2699v3/E5-2697 v3, Infiniband FDR, NVIDIA Tesla K40, Intel Xeon Phi 7120P',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 26,
             	eff: 1382.40,
             	conf: 'Fujitsu PRIMEHPC FX100, SPARC64 XIfx 32C 2.2GHz, Tofu interconnect 2',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 27,
             	eff: 3422.67,
             	conf: 'iDataPlex DX360M4, Xeon E5-2680 8C 2.70GHz, Infiniband FDR',
             	color: '#006400'
             },
             
             
            
             {
             	rank: 28,
             	eff: 1480.83,
             	conf: 'NeXtScale nx360M5, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR14',
             	color: '#A9A9A9'
             },
             
             
            
             {
             	rank: 29,
             	eff: 1347.84,
             	conf: 'Cray XC40, Xeon E5-2695v4 18C 2.1GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 30,
             	eff: 1347.84,
             	conf: 'Cray XC40, Xeon E5-2695v4 18C 2.1GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 31,
             	eff: 927.86,
             	conf: 'Cluster Platform SL390s G7, Xeon X5670 6C 2.93GHz, Infiniband QDR, NVIDIA K20x',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 32,
             	eff: 4040.00,
             	conf: 'NUDT YH MPP, Xeon X5670 6C 2.93 GHz, NVIDIA 2050',
             	color: '#6495ED'
             },
             
             
            
             {
             	rank: 33,
             	eff: 1116.00,
             	conf: 'bullx DLC 720, Xeon E5-2680v3 12C 2.5GHz/E5-2695V4 18C  2.1Ghz, Infiniband FDR',
             	color: '#8B008B'
             },
             
             
            
             {
             	rank: 34,
             	eff: 1384.00,
             	conf: 'Atipa Visione IF442 Blade Server, Xeon E5-2670 8C 2.600GHz, Infiniband FDR, Intel Xeon Phi 5110P',
             	color: '#556B2F'
             },
             
             
            
             {
             	rank: 35,
             	eff: 1465.78,
             	conf: 'Cray XC40, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 36,
             	eff: 1359.38,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 37,
             	eff: 1359.38,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 38,
             	eff: 1244.16,
             	conf: 'Fujitsu PRIMEHPC FX100, SPARC64 XIfx  32C 1.98GHz, Tofu interconnect 2',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 39,
             	eff: 1134.00,
             	conf: 'Dell PowerEdge R630, Xeon E5-2680v3 12C 2.5GHz, Infiniband QDR',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 40,
             	eff: 830.40,
             	conf: 'bullx DLC 720, Xeon E5-2698v4 20C 2.2GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 41,
             	eff: 1079.00,
             	conf: 'T-Platform A-Class Cluster, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR, Nvidia K40m',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 42,
             	eff: 997.00,
             	conf: 'Tianhe-2 LvLiang, Intel Xeon E5-2692v2 12C 2.2GHz, TH Express-2, Intel Xeon Phi 31S1P',
             	color: '#6495ED'
             },
             
             
            
             {
             	rank: 43,
             	eff: 3012.00,
             	conf: 'SGI ICE X, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 44,
             	eff: 1042.00,
             	conf: 'bullx DLC 720, Xeon E5-2698v3 16C 2.3GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 45,
             	eff: 821.88,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 46,
             	eff: 1360.80,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2697v4 18C 2.3GHz, Omni-Path',
             	color: '#9932CC'
             },
             
             
            
             {
             	rank: 47,
             	eff: 2880.00,
             	conf: 'Cluster Platform 3000 BL460c Gen9, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 48,
             	eff: 807.60,
             	conf: 'HP Apollo 8000, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, NVIDIA Tesla K40',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 49,
             	eff: 3747.07,
             	conf: 'Cray XC30, Intel Xeon E5-2695v2 12C 2.4GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 50,
             	eff: 3306.24,
             	conf: 'Cray XC30, Intel Xeon E5 v2 12C 2.700GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 51,
             	eff: 956.25,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 52,
             	eff: 956.25,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 53,
             	eff: 934.80,
             	conf: 'bullx  DLC, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 54,
             	eff: 3575.63,
             	conf: 'Power 775, POWER7 8C 3.836GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 55,
             	eff: 4806.00,
             	conf: 'SGI ICE X, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, Intel Xeon Phi 7120P',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 56,
             	eff: 657.00,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 57,
             	eff: 828.55,
             	conf: 'T-Platforms V-Class, Xeon E5-2680v3 12C 2.5GHz, Infiniband EDR/ParTec ParaStation ClusterSuite, NVIDIA Tesla K80/K40',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 58,
             	eff: 1606.00,
             	conf: 'SGI ICE X, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 59,
             	eff: 519.00,
             	conf: 'Cray XC40, Xeon E5-2695v4 18C 2.1GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 60,
             	eff: 785.62,
             	conf: 'Cray XC40, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 61,
             	eff: 543.00,
             	conf: 'bullx DLC 720, Xeon E5-2695v4 18C 2.1GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 62,
             	eff: 2132.00,
             	conf: 'Bullx B510, Xeon E5-2680 8C 2.700GHz, Infiniband QDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 63,
             	eff: 539.00,
             	conf: 'bullx DLC 720, Xeon E5-2680v4 14C 2.4GHz, Infiniband EDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 64,
             	eff: 2323.71,
             	conf: 'Cray XC40, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect , Intel Xeon Phi 5120D',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 65,
             	eff: 2323.71,
             	conf: 'Cray XC40, Xeon E5-2698v3 16C 2.3GHz, Aries interconnect , Intel Xeon Phi 5120D',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 66,
             	eff: 1260.00,
             	conf: 'iDataPlex DX360M4, Intel Xeon E5-2680v2  10C 2.800GHz, Infiniband FDR',
             	color: '#006400'
             },
             
             
            
             {
             	rank: 67,
             	eff: 2580.00,
             	conf: 'Dawning TC3600 Blade System, Xeon X5650 6C 2.66GHz, Infiniband QDR, NVIDIA 2050',
             	color: '#E9967A'
             },
             
             
            
             {
             	rank: 68,
             	eff: 1436.72,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 69,
             	eff: 680.00,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 70,
             	eff: 2200.00,
             	conf: 'Bullx B510, Xeon E5-2680 8C 2.700GHz, Infiniband QDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 71,
             	eff: 472.00,
             	conf: 'bullx DLC 720, Xeon E5-2698v4 20C 2.2GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 72,
             	eff: 580.90,
             	conf: 'SGI ICE XA, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 73,
             	eff: 5569.00,
             	conf: 'Cray XE6, Opteron 16C 2.500GHz, Cray Gemini interconnect',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 74,
             	eff: 2437.50,
             	conf: 'Lenovo RD450, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 75,
             	eff: 3980.00,
             	conf: 'Cray XE6, Opteron 6136 8C 2.40GHz, Custom',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 76,
             	eff: 3564.00,
             	conf: 'Dell C4130, Xeon E5-2630v3 8C 2.4GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 77,
             	eff: 2625.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2680v3 12C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 78,
             	eff: 2625.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2680v3 12C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 79,
             	eff: 697.50,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 80,
             	eff: 706.00,
             	conf: 'Bullx DLC B710/B720 Blades, Xeon E5-2695 v2 2.4GHz E5-2690v3 2.6GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 81,
             	eff: 493.12,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 82,
             	eff: 493.12,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 83,
             	eff: 500.00,
             	conf: 'Dell C8220X Cluster, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR, NVIDIA K20x',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 84,
             	eff: 4590.00,
             	conf: 'Bull bullx super-node S6010/S6030',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 85,
             	eff: 1176.80,
             	conf: 'PRIMEHPC FX10, SPARC64 IXfx 16C 1.848GHz, Tofu interconnect',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 86,
             	eff: 3750.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 87,
             	eff: 582.00,
             	conf: 'bullx DLC 720, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 88,
             	eff: 19431.30,
             	conf: 'HA8000-tc HT210/PRIMERGY CX400 Cluster, Xeon E5-2680 8C 2.700GHz, Infiniband FDR, NVIDIA K20/K20x, Xeon Phi 5110P',
             	color: '#8FBC8F'
             },
             
             
            
             {
             	rank: 89,
             	eff: 586.88,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 90,
             	eff: 549.60,
             	conf: 'Huawei E9000 Blade Server, Xeon E5-2697v3 14C 2.6GHz, 56G Infiniband FDR',
             	color: '#483D8B'
             },
             
             
            
             {
             	rank: 91,
             	eff: 3375.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 92,
             	eff: 864.00,
             	conf: 'HP ProLiant XL230a Gen9/Huawei RH1288/SOLAR 820 S5, Xeon E5-2670v3 12C 2.3GHz, Infiniband',
             	color: '#2F4F4F'
             },
             
             
            
             {
             	rank: 93,
             	eff: 1159.20,
             	conf: 'PRIMERGY CX2550 M1 LC &amp; CX2570 M1 LC, Xeon E5-2690v3 12C 2.6GHz, Infiniband EDR',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 94,
             	eff: 149.99,
             	conf: 'ZettaScaler-1.6, Xeon E5-2618Lv3  8C 2.3GHz, Infiniband FDR, PEZY-SCnp',
             	color: '#2F4F4F'
             },
             
             
            
             {
             	rank: 95,
             	eff: 2008.80,
             	conf: 'Rackable Cluster, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 96,
             	eff: 877.50,
             	conf: 'Cray XC40, Intel Xeon E5-2695v2/E5-2680v3 12C 2.4/2.5GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 97,
             	eff: 518.40,
             	conf: 'Fujitsu PRIMEHPC FX100, SPARC64 XIfx  32C 1.98GHz, Tofu interconnect 2',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 98,
             	eff: 518.40,
             	conf: 'Fujitsu PRIMEHPC FX100, SPARC64 XIfx  32C 1.98GHz, Tofu interconnect 2',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 99,
             	eff: 1605.12,
             	conf: 'Fujitsu PRIMERGY CX250 S1, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 100,
             	eff: 510.00,
             	conf: 'Cluster Platform SL250s Gen8, Xeon E5-2670 8C 2.600GHz, Infiniband FDR, Intel Xeon Phi 5110P',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 101,
             	eff: 855.10,
             	conf: 'SGI ICE X, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 102,
             	eff: 1571.14,
             	conf: 'Cray XC30, Intel Xeon E5-2697v2 12C 2.7GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 103,
             	eff: 3375.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2660v3 10C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 104,
             	eff: 3375.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2660v3 10C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 105,
             	eff: 1394.40,
             	conf: 'Cluster Platform HP DL360 Gen9, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 106,
             	eff: 1015.60,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 107,
             	eff: 1590.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 108,
             	eff: 585.36,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 109,
             	eff: 2800.00,
             	conf: 'T-Platforms T-Blade2/1.1, Xeon X5570/X5670/E5630 2.93/2.53 GHz, Nvidia 2070 GPU, PowerXCell 8i Infiniband QDR',
             	color: '#556B2F'
             },
             
             
            
             {
             	rank: 110,
             	eff: 607.50,
             	conf: 'Cray XC40, Xeon E5-2680v3 12C 2.5GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 111,
             	eff: 410.90,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 112,
             	eff: 1840.00,
             	conf: 'Cluster Platform DL360, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 113,
             	eff: 1533.60,
             	conf: 'Cluster Platform 3000 BL460c, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 114,
             	eff: 787.50,
             	conf: 'Cray XC40, Intel Xeon E5-2695v2 12C 2.4GHz/E5-2680v3 12C 2.5GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 115,
             	eff: 881.25,
             	conf: 'Lenovo RD450, Xeon E5-2682v4 16C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 116,
             	eff: 996.00,
             	conf: 'Lenovo x3950, Xeon E7-8860v3  16C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 117,
             	eff: 515.46,
             	conf: 'Intel S7200AP Cluster, Intel Xeon Phi 7250 68C 1.4GHz, Intel Omni-Path',
             	color: '#00CED1'
             },
             
             
            
             {
             	rank: 118,
             	eff: 707.00,
             	conf: 'Cluster Platform SL230s Gen8, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband QDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 119,
             	eff: 568.50,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 120,
             	eff: 1074.00,
             	conf: 'Sunway BlueLight MPP, ShenWei processor SW1600 975.00 MHz, Infiniband QDR',
             	color: '#FF7F50'
             },
             
             
            
             {
             	rank: 121,
             	eff: 540.00,
             	conf: 'PowerEdge C6320, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 122,
             	eff: 190.00,
             	conf: 'Cray CS-Storm, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR, Nvidia K80',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 123,
             	eff: 255.30,
             	conf: 'SGI ICE XA, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, Nvidia K40',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 124,
             	eff: 924.16,
             	conf: 'Xtreme-X GreenBlade GB512X, Xeon E5 (Sandy Bridge - EP) 8C 2.60GHz, Infiniband QDR',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 125,
             	eff: 1155.07,
             	conf: 'NUDT YH MPP, Xeon X5670 6C 2.93 GHz, Proprietary, NVIDIA 2050',
             	color: '#6495ED'
             },
             
             
            
             {
             	rank: 126,
             	eff: 435.00,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2660v3 10C 2.6GHz, Infiniband EDR/FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 127,
             	eff: 684.50,
             	conf: 'SGI ICE X, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 128,
             	eff: 387.20,
             	conf: 'Intel Cluster, Intel Xeon E5-2697v2 12C 2.700GHz, Infiniband FDR, Intel Xeon Phi 7110',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 129,
             	eff: 2625.00,
             	conf: 'Lenovo ThinkServer RD650, Intel Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 130,
             	eff: 2625.00,
             	conf: 'Lenovo ThinkServer RD650, Intel Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 131,
             	eff: 2625.00,
             	conf: 'Lenovo ThinkServer RD650, Intel Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 132,
             	eff: 1000.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 133,
             	eff: 365.80,
             	conf: 'Cray CS300 1027GR, Intel Xeon E5-2670v2  10C 2.500GHz, Infiniband FDR, Intel Xeon Phi 7110P',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 134,
             	eff: 1123.50,
             	conf: 'HP SL250s Gen8/Lenovo NX360M5, Dell C4130, Xeon E5-2665 8C 2.4GHz/E5-2670v2, Infiniband FDR, Nvidia K20m/K40/K20',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 135,
             	eff: 405.00,
             	conf: 'SGI ICE X, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 136,
             	eff: 384.00,
             	conf: 'PowerEdge C6320, Xeon E5-2698v3 16C 2.3GHz, Infiniband',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 137,
             	eff: 540.00,
             	conf: 'Sugon Cluster TC4600E, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 138,
             	eff: 225.00,
             	conf: 'Inspur TS10000 HPC Server, Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#FF1493'
             },
             
             
            
             {
             	rank: 139,
             	eff: 789.66,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 140,
             	eff: 328.75,
             	conf: 'BlueGene/Q, Power BQC 16C 1.600GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 141,
             	eff: 328.75,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 142,
             	eff: 328.75,
             	conf: 'BlueGene/Q, Power BQC 16C 1.600GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 143,
             	eff: 328.75,
             	conf: 'BlueGene/Q, Power BQC 16C 1.600GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 144,
             	eff: 328.75,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 145,
             	eff: 269.94,
             	conf: 'iDataPlex DX360M4, Intel Xeon E5-2680v2  10C 2.800GHz, Infiniband, NVIDIA K20x',
             	color: '#006400'
             },
             
             
            
             {
             	rank: 146,
             	eff: 775.04,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 147,
             	eff: 775.04,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 148,
             	eff: 353.00,
             	conf: 'Actina Solar 820 S6, Xeon E5-2670v3/E5-2697v3 14C/12C 2.6/2.3GHz, Infiniband FDR',
             	color: '#696969'
             },
             
             
            
             {
             	rank: 149,
             	eff: 3750.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 150,
             	eff: 1128.00,
             	conf: 'Cluster Platform 3000 BL460c Gen9, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 151,
             	eff: 2825.55,
             	conf: 'IBM NeXtScale nx360M4, Xeon E5-2630v3 8C 2.4GHz, Infiniband QDR, Intel Xeon Phi 7120P',
             	color: '#A9A9A9'
             },
             
             
            
             {
             	rank: 152,
             	eff: 1234.90,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 153,
             	eff: 672.00,
             	conf: 'Lenovo x240 M5, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 154,
             	eff: 880.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 155,
             	eff: 880.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 156,
             	eff: 411.00,
             	conf: 'Sugon TC4600, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 157,
             	eff: 2250.00,
             	conf: 'Lenovo RD940, Xeon E7-4850V2 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 158,
             	eff: 990.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2450v2 8C 2.5GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 159,
             	eff: 320.00,
             	conf: 'RSC Tornado, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR',
             	color: '#696969'
             },
             
             
            
             {
             	rank: 160,
             	eff: 1192.50,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 161,
             	eff: 1091.80,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 162,
             	eff: 3840.00,
             	conf: 'Cluster Platform DL380p Gen8 , Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 163,
             	eff: 165.00,
             	conf: 'Inspur TS10000 HPC Server, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 164,
             	eff: 251.20,
             	conf: 'SGI ICE XA, Xeon E5-2690v4 14C 2.6GHz, Infiniband EDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 165,
             	eff: 162.00,
             	conf: 'Inspur TS10000, Xeon E5-2650v3 10C 2.3GHz, Infiniband FDR, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 166,
             	eff: 896.00,
             	conf: 'FatTwin SuperServer, Xeon E5-2695v4 18C 2.1GHz, Intel Omni-Path',
             	color: '#1E90FF'
             },
             
             
            
             {
             	rank: 167,
             	eff: 458.12,
             	conf: 'Cray XK7 , Opteron 6276 16C 2.300GHz, Cray Gemini interconnect, NVIDIA K20',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 168,
             	eff: 166.00,
             	conf: 'Inspur TS10000, Xeon E5-2620v3 6C 2.4GHz, 40G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 169,
             	eff: 450.00,
             	conf: 'Oil blade server, Intel Xeon E5-2650v2  8C 2.6GHz, Intel TrueScale Infiniband',
             	color: '#B22222'
             },
             
             
            
             {
             	rank: 170,
             	eff: 315.00,
             	conf: 'Sugon TC4600LP, Xeon E5-2680v4 14C 2.4GHz, Infiniband EDR',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 171,
             	eff: 783.20,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 172,
             	eff: 783.20,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 173,
             	eff: 576.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 174,
             	eff: 720.00,
             	conf: 'SGI ICE X, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 175,
             	eff: 2550.00,
             	conf: 'Lenovo RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 176,
             	eff: 780.00,
             	conf: 'Sugon TC6000, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 177,
             	eff: 1179.75,
             	conf: 'Lenovo RD450, Xeon E5-2650v3 10C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 178,
             	eff: 237.00,
             	conf: 'Cluster Platform SL250s Gen8/Lenovo nx360M5 , Xeon E5-2665 8C 2.400GHz, Infiniband FDR, Nvidia K20m/K40m',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 179,
             	eff: 960.00,
             	conf: 'SGI ICE X, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 180,
             	eff: 900.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 181,
             	eff: 892.50,
             	conf: 'Lenovo RD450, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 182,
             	eff: 972.00,
             	conf: 'Cray XE6, Opteron 6276 16C 2.30GHz, Cray Gemini interconnect',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 183,
             	eff: 552.00,
             	conf: 'Lenovo RD450, Xeon E5-2682v4 16C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 184,
             	eff: 3645.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2660v2 10C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 185,
             	eff: 720.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2630v2 6C 2.6GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 186,
             	eff: 319.87,
             	conf: 'Cray XC30, Intel Xeon E5-2680v2  10C 2.8GHz, Aries interconnect , NVIDIA K20x',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 187,
             	eff: 1256.25,
             	conf: 'Lenovo RD450, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 188,
             	eff: 882.00,
             	conf: 'Huawei  Cluster RH2288H V2, Intel Xeon E5-2650v2  8C 2.6GHz, Gigabit Ethernet',
             	color: '#8FBC8F'
             },
             
             
            
             {
             	rank: 189,
             	eff: 370.00,
             	conf: 'Dell C8220X Cluster, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR, Intel Xeon Phi 7120P',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 190,
             	eff: 380.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 191,
             	eff: 540.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2450v2 8C 2.5GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 192,
             	eff: 168.00,
             	conf: 'Sugon W580-G20, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet, NVIDIA Tesla K80',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 193,
             	eff: 3510.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2660v2 10C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 194,
             	eff: 1224.00,
             	conf: 'Rackable Cluster, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 195,
             	eff: 1224.00,
             	conf: 'Rackable Cluster, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 196,
             	eff: 255.00,
             	conf: 'NEC HPC1816Rg, Xeon E5-2680v4 14C 2.4GHz, Infiniband EDR',
             	color: '#228B22'
             },
             
             
            
             {
             	rank: 197,
             	eff: 3362.40,
             	conf: 'Cluster Platform DL380p Gen8 , Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 198,
             	eff: 2410.20,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Xeon E5-2670 8C 2.600GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 199,
             	eff: 576.00,
             	conf: 'Lenovo x3950, Xeon E7-8860v3  16C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 200,
             	eff: 246.56,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 201,
             	eff: 246.56,
             	conf: 'BlueGene/Q, Power BQC 16C 1.600GHz, Custom Interconnect',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 202,
             	eff: 3375.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2660v2 10C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 203,
             	eff: 3375.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2660v2 10C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 204,
             	eff: 3375.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2660v2 10C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 205,
             	eff: 198.86,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2680v4 14C 2.4GHz, Infiniband EDR/FDR, NVIDIA Tesla K80',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 206,
             	eff: 675.00,
             	conf: 'Cray CS300-LC, Xeon E5-2670 8C 2.6GHz, Intel Truscale',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 207,
             	eff: 179.15,
             	conf: 'Adtech, ASUS ESC4000/FDR G2, Xeon E5-2650 8C 2.000GHz, Infiniband FDR, AMD FirePro S10000',
             	color: '#FF00FF'
             },
             
             
            
             {
             	rank: 208,
             	eff: 1200.00,
             	conf: 'Lenovo RD450, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 209,
             	eff: 883.50,
             	conf: 'Lenovo x240 M5, Xeon E5-2667v3 8C 3.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 210,
             	eff: 678.40,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 211,
             	eff: 668.80,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 212,
             	eff: 668.80,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 213,
             	eff: 500.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2450v2 8C 2.5GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 214,
             	eff: 257.04,
             	conf: 'Dalco H88 Cluster, Xeon E5-2630v4 10C 2.2GHz, Intel Omni-Path',
             	color: '#DCDCDC'
             },
             
             
            
             {
             	rank: 215,
             	eff: 756.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 216,
             	eff: 665.60,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 217,
             	eff: 498.46,
             	conf: 'HP Apollo 6000 Xl230/250 , Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, NVIDIA Tesla K40m',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 218,
             	eff: 1061.25,
             	conf: 'Lenovo x3650, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 219,
             	eff: 1363.20,
             	conf: 'HP POD - Cluster Platform BL460c, Intel Xeon E5-2697v2 12C 2.7GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 220,
             	eff: 600.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2630v2 6C 2.6GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 221,
             	eff: 1081.02,
             	conf: 'Cray XC30, Intel Xeon E5-2697v2 12C 2.7GHz, Aries interconnect , Intel Xeon Phi 5120D',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 222,
             	eff: 649.60,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 223,
             	eff: 373.75,
             	conf: 'IBM NeXtScale nx360M5, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 224,
             	eff: 456.00,
             	conf: 'Lenovo x3950, Xeon E7-8867v3  16C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 225,
             	eff: 750.00,
             	conf: 'Dell PowerEdge R730, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR14, NVIDIA Tesla K80',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 226,
             	eff: 180.00,
             	conf: 'Sugon Cluster W580I, Xeon E5-2640v3 8C 2.6GHz, Infiniband FDR, NVIDIA Tesla K20',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 227,
             	eff: 3780.00,
             	conf: 'Cluster Platform SL230s Gen8, Intel Xeon E5-2680v2  10C 2.800GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 228,
             	eff: 730.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 229,
             	eff: 540.00,
             	conf: 'Mole-8.5 Cluster, Xeon X5520 4C 2.27 GHz, Infiniband QDR, NVIDIA 2050',
             	color: '#DAA520'
             },
             
             
            
             {
             	rank: 230,
             	eff: 712.50,
             	conf: 'Lenovo RD450, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 231,
             	eff: 750.00,
             	conf: 'Lenovo RD940, Xeon E7-4850V3 14C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 232,
             	eff: 800.30,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 233,
             	eff: 2001.60,
             	conf: 'Cluster Platform SL230s Gen8, Intel Xeon E5-2697v2 12C 2.7GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 234,
             	eff: 1102.50,
             	conf: 'Lenovo RD650, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 235,
             	eff: 260.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2698v3 16C 2.3GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 236,
             	eff: 644.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 237,
             	eff: 644.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 238,
             	eff: 644.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 239,
             	eff: 644.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 240,
             	eff: 609.41,
             	conf: 'Amazon EC2 Cluster, Intel Xeon E5-2680v2  10C 2.800GHz, 10G Ethernet',
             	color: '#808080'
             },
             
             
            
             {
             	rank: 241,
             	eff: 1036.00,
             	conf: 'Cluster Platform DL380 Cluster, Xeon E5-2630v3 8C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 242,
             	eff: 2496.00,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Intel Xeon E5-2680v2  10C 2.8GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 243,
             	eff: 633.60,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 244,
             	eff: 633.60,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 245,
             	eff: 1153.49,
             	conf: 'Cray XC30, Intel Xeon E5-2697v2 12C 2.7GHz, Aries interconnect , Xeon Phi 5120D/Nvidia K40',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 246,
             	eff: 339.20,
             	conf: 'HP Apollo 6000 Xl230/250 , Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 247,
             	eff: 870.00,
             	conf: 'Sugon TC6000, Opteron 6344 12C 2.6GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 248,
             	eff: 316.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 249,
             	eff: 464.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 250,
             	eff: 162.00,
             	conf: 'Inspur TS10000, Xeon E5-2690v3 12C 2.6GHz, Intel Omni-Path',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 251,
             	eff: 1060.00,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2680v3 12C 2.5GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 252,
             	eff: 540.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2630v2 6C 2.6GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 253,
             	eff: 391.00,
             	conf: 'Bullx DLC B710 Blades, Intel Xeon E5-2697v2 12C 2.7GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 254,
             	eff: 1875.00,
             	conf: 'Lenovo RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 255,
             	eff: 1750.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 256,
             	eff: 244.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2698v3 16C 2.3GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 257,
             	eff: 193.40,
             	conf: 'Cray CS300-LC, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR, Intel Xeon Phi 5110P',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 258,
             	eff: 187.45,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, NVIDIA Tesla K40',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 259,
             	eff: 4032.00,
             	conf: 'Cluster Platform SL390s G7, Xeon X5650 6C 2.660GHz, Gigabit Ethernet, NVIDIA 2090',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 260,
             	eff: 774.40,
             	conf: 'Cluster Platform DL380 Cluster, Xeon E5-2680v3 12C 2.5GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 261,
             	eff: 3375.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 262,
             	eff: 3375.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 263,
             	eff: 612.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 264,
             	eff: 2419.20,
             	conf: 'Cluster Platform SL230s Gen8, Xeon E5-2670 8C 2.600GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 265,
             	eff: 371.25,
             	conf: 'Bullx B710, Intel Xeon E5-2695v2 12C 2.4GHz, Infiniband FDR, Nvidia K40',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 266,
             	eff: 670.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 267,
             	eff: 670.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 268,
             	eff: 128.00,
             	conf: 'Inspur TS10000, Xeon E5-2620v3 6C 2.4GHz, 40G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 269,
             	eff: 1500.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2609V2 4C 2.5GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 270,
             	eff: 1500.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2609V2 4C 2.5GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 271,
             	eff: 498.53,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR14',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 272,
             	eff: 600.00,
             	conf: 'Sugon TC6000, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 273,
             	eff: 797.65,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2680v3 12C 2.5GHz, Infiniband QDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 274,
             	eff: 669.00,
             	conf: 'Lenovo x3650, Xeon E5-2660v3 10C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 275,
             	eff: 792.00,
             	conf: 'Lenovo x3650, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 276,
             	eff: 300.00,
             	conf: 'Sugon TC6000, Xeon E7-4830V2 10C 2.2GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 277,
             	eff: 505.50,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#A9A9A9'
             },
             
             
            
             {
             	rank: 278,
             	eff: 570.00,
             	conf: 'Lenovo RD450, Xeon E5-2680v3 12C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 279,
             	eff: 191.50,
             	conf: 'NEC Cluster, Xeon E5-2650v4 12C 2.2GHz, Intel Omni-Path',
             	color: '#B22222'
             },
             
             
            
             {
             	rank: 280,
             	eff: 965.25,
             	conf: 'Lenovo RD450, Xeon E5-2630v3 8C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 281,
             	eff: 544.00,
             	conf: 'IBM Flex System p460, POWER7  8C 3.550GHz, Infiniband QDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 282,
             	eff: 544.00,
             	conf: 'IBM Flex System p460, POWER7  8C 3.550GHz, Infiniband QDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 283,
             	eff: 550.40,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 284,
             	eff: 550.40,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 285,
             	eff: 4343.73,
             	conf: 'Sun Blade x6275, Xeon X55xx 2.93 Ghz, Infiniband',
             	color: '#008000'
             },
             
             
            
             {
             	rank: 286,
             	eff: 530.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2640v2 8C 2GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 287,
             	eff: 1200.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2609V2 4C 2.5GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 288,
             	eff: 205.00,
             	conf: 'bullx DLC 720, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 289,
             	eff: 5674.80,
             	conf: 'Cluster Platform DL360e Gen8, Xeon E5-2450L 8C 1.800GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 290,
             	eff: 620.80,
             	conf: 'Cluster Platform HP DL360 Gen9, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 291,
             	eff: 1200.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 292,
             	eff: 334.00,
             	conf: 'Supermicro TwinBlade SBI-7227R/Bull DLC B720, Intel Xeon E5-2680v2/E5-2650 v3  10C 2.8GHz, Infiniband QDR/FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 293,
             	eff: 990.00,
             	conf: 'Sugon TC6000, Xeon E7-4830V2 10C 2.2GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 294,
             	eff: 407.29,
             	conf: 'Xtreme-X GreenBlade 8204, Xeon E5-2670 8C 2.600GHz, Infiniband QDR, NVIDIA 2090',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 295,
             	eff: 540.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2630v2 6C 2.6GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 296,
             	eff: 329.20,
             	conf: 'Cluster Platform SL230s Gen8, Xeon E5-2667v3 8C 3.2GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 297,
             	eff: 2835.00,
             	conf: 'Cluster Platform DL360p Gen8, Intel Xeon E5-2670v2  10C 2.5GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 298,
             	eff: 528.75,
             	conf: 'Lenovo RD450, Xeon E5-2680v3 12C 2.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 299,
             	eff: 3244.80,
             	conf: 'Cluster Platform SL230s Gen8, Xeon E5-2670 8C 2.600GHz, 10G Ethernet, NVIDIA 2075',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 300,
             	eff: 540.00,
             	conf: 'Sugon TC6000, Xeon E5-2420v2 6C 2.2GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 301,
             	eff: 530.40,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 302,
             	eff: 530.40,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 303,
             	eff: 215.60,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband QDR, Intel Xeon Phi 5110P',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 304,
             	eff: 3168.00,
             	conf: 'EXXACT TXR410-768R Cluster, Intel Xeon E5-2620v2 6C 2.1GHz, Infiniband FDR, Nvidia Titan Black',
             	color: '#ADFF2F'
             },
             
             
            
             {
             	rank: 305,
             	eff: 110.00,
             	conf: 'Inspur TS10000 HPC Server, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 306,
             	eff: 110.00,
             	conf: 'Inspur TS10000 HPC Server, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 307,
             	eff: 110.00,
             	conf: 'Inspur TS10000 HPC Server, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 308,
             	eff: 110.00,
             	conf: 'Inspur TS10000 HPC Server, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 309,
             	eff: 549.60,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 310,
             	eff: 3628.80,
             	conf: 'SGI Rackable C2112-4RP3, Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 311,
             	eff: 1750.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 312,
             	eff: 520.00,
             	conf: 'Sugon TC5000, Intel Xeon E5-2630v2 6C 2.6GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 313,
             	eff: 2625.00,
             	conf: 'Lenovo ThinkServer RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 314,
             	eff: 3843.00,
             	conf: 'Cluster Platform DL360p, Intel Xeon E5-2650Lv2 10C 1.7GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 315,
             	eff: 834.75,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2683v3 14C 2GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 316,
             	eff: 448.00,
             	conf: 'Cluster Platform DL380 Cluster, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 317,
             	eff: 1440.00,
             	conf: 'Cluster Platform 3000 BL460c, Intel Xeon E5-2697v2 12C 2.7GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 318,
             	eff: 519.00,
             	conf: 'Cluster Platform SL230s Gen8, Xeon E5-2660 8C 2.200GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 319,
             	eff: 726.00,
             	conf: 'Cluster Platform DL60, Xeon E5-2660v3 10C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 320,
             	eff: 282.00,
             	conf: 'TC4600H/W580I, Xeon E5-2680v3 12C 2.5GHz/ E5-2680v2, FDR, Intel Xeon Phi 5110P/NVIDIA Tesla K20',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 321,
             	eff: 750.00,
             	conf: 'Sugon TC6000, Opteron 6344 12C 2.6GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 322,
             	eff: 1650.00,
             	conf: 'Lenovo RD650, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 323,
             	eff: 2580.00,
             	conf: 'SGI ICE X, Intel Xeon E5-2690v2 10C 3GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 324,
             	eff: 3456.82,
             	conf: 'Cray CS-Storm, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 325,
             	eff: 424.80,
             	conf: 'HP Apollo XL1x0r, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 326,
             	eff: 1350.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2609V2 4C 2.5GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 327,
             	eff: 1056.00,
             	conf: 'HP POD - Cluster Platform BL460c, Intel Xeon E5-2697v2 12C 2.7GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 328,
             	eff: 2250.00,
             	conf: 'Lenovo RD650, Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 329,
             	eff: 600.00,
             	conf: 'Lenovo x3650, Xeon E5-2660v3 10C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 330,
             	eff: 1860.00,
             	conf: 'Lenovo RD350, Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 331,
             	eff: 537.00,
             	conf: 'SGI ICE X, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 332,
             	eff: 3700.50,
             	conf: 'Cluster Platform DL360p, Intel Xeon E5-2650Lv2 10C 1.7GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 333,
             	eff: 190.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2630v2 6C 2.6GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 334,
             	eff: 413.62,
             	conf: 'Cray XC40, Intel Xeon E5-2670v2  10C 2.5GHz/E5-2680v3 12C 2.5Ghz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 335,
             	eff: 413.62,
             	conf: 'Cray XC40, Intel Xeon E5-2670v2  10C 2.5GHz/E5-2680v3 12C 2.5Ghz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 336,
             	eff: 429.10,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Intel Xeon E5-2697v2 12C 2.7GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 337,
             	eff: 209.95,
             	conf: 'R2208GZ Cluster, Xeon E5-2670 8C 2.600GHz, Infiniband FDR, Intel Xeon Phi 5110P',
             	color: '#808080'
             },
             
             
            
             {
             	rank: 338,
             	eff: 1500.00,
             	conf: 'Lenovo RD940, Xeon E7-4830V2 10C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 339,
             	eff: 378.00,
             	conf: 'Lenovo x3950, Xeon E7-8860v3  16C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 340,
             	eff: 3750.00,
             	conf: 'Lenovo ThinkServer RD650, Intel Xeon E5-2637v2 4C 3.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 341,
             	eff: 3750.00,
             	conf: 'Lenovo ThinkServer RD650, Intel Xeon E5-2637v2 4C 3.5GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 342,
             	eff: 654.75,
             	conf: 'Lenovo RD650, Xeon E5-2650v3 10C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 343,
             	eff: 196.10,
             	conf: 'SGI ICE X, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 344,
             	eff: 1500.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2620v2 6C 2.1GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 345,
             	eff: 165.30,
             	conf: 'Cray XC30, Intel Xeon E5-2670v2  10C 2.500GHz, Aries interconnect , Intel Xeon Phi 5120D',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 346,
             	eff: 360.00,
             	conf: 'Lenovo x3950, Xeon  E7-8870V2 18C 2.1GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 347,
             	eff: 900.00,
             	conf: 'Lenovo x3550, Intel Xeon E5-2680v2  10C 2.8GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 348,
             	eff: 222.70,
             	conf: 'RSC Tornado, Xeon E5-2690 8C 2.900GHz, Infiniband FDR, Intel Xeon Phi SE10X',
             	color: '#696969'
             },
             
             
            
             {
             	rank: 349,
             	eff: 1609.20,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Xeon E5-2640 6C 2.5GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 350,
             	eff: 1218.75,
             	conf: 'Lenovo RD450, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 351,
             	eff: 897.00,
             	conf: 'SuperMicro Twin^2, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#FF69B4'
             },
             
             
            
             {
             	rank: 352,
             	eff: 1314.00,
             	conf: 'Lenovo x3750, Intel Xeon E5-4620v2 8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 353,
             	eff: 1400.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2630v2 6C 2.6GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 354,
             	eff: 1917.60,
             	conf: 'Cluster Platform SL250s Gen8, Xeon E5-2670 8C 2.600GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 355,
             	eff: 787.50,
             	conf: 'Lenovo RD450, Xeon E5-2630v3 8C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 356,
             	eff: 192.81,
             	conf: 'NeXtScale nx360M5, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR14',
             	color: '#006400'
             },
             
             
            
             {
             	rank: 357,
             	eff: 485.60,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 358,
             	eff: 485.60,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 359,
             	eff: 549.00,
             	conf: 'Lenovo x3650, Xeon E5-2660v3 10C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 360,
             	eff: 2942.10,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2640 6C 2.500GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 361,
             	eff: 147.00,
             	conf: 'Cray CS400, Xeon E5-2697v4 18C 2.3GHz, Omni-Path',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 362,
             	eff: 506.67,
             	conf: 'Cray CS400, Xeon E5-2698v3 16C 2.3GHz, Infiniband FDR',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 363,
             	eff: 261.84,
             	conf: 'SGI ICE X, Intel Xeon E5-2697v2/E5-2680v3 12C/12C 2.7GHz/2.5GHz, Infiniband FDR, Intel Xeon Phi 5120D',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 364,
             	eff: 858.75,
             	conf: 'Bullx B710, Intel Xeon E5-2695v2 12C 2.4GHz, Infiniband FDR, Intel Xeon Phi 7120P',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 365,
             	eff: 972.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2670v2  10C 2.5GHz, Infiniband FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 366,
             	eff: 972.00,
             	conf: 'Lenovo NeXtScale nx360M5, Intel Xeon E5-2670v2  10C 2.5GHz, Infiniband FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 367,
             	eff: 810.00,
             	conf: 'Lenovo x240 M5, Intel Xeon E5-2670v2  10C 2.5GHz, Infiniband FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 368,
             	eff: 1260.00,
             	conf: 'Lenovo x3850, Xeon E7-4820V2 8C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 369,
             	eff: 1260.00,
             	conf: 'Lenovo x3850, Xeon E7-4820V2 8C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 370,
             	eff: 579.48,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Xeon E5-2670 8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 371,
             	eff: 4875.00,
             	conf: 'Lenovo RD650, Xeon E5-2407v2 4C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 372,
             	eff: 96.00,
             	conf: 'Dell PowerEdge T630/Sugon W580, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet, NVIDIA Tesla K20m/K80',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 373,
             	eff: 468.00,
             	conf: 'Lenovo x240 M5/nx360 M5, Xeon E5-2650v3 10C 2.3GHz, Infiniband FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 374,
             	eff: 164.38,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 375,
             	eff: 164.38,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60 GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 376,
             	eff: 164.38,
             	conf: 'BlueGene/Q, Power BQC 16C 1.60 GHz, Custom',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 377,
             	eff: 3750.00,
             	conf: 'Lenovo ThinkServer RD650, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 378,
             	eff: 495.00,
             	conf: 'Lenovo x3650, Xeon E5-2670v3 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 379,
             	eff: 112.50,
             	conf: 'Sugon Cluster, Xeon E5-2620v3 6C 2.4GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 380,
             	eff: 472.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 381,
             	eff: 115.00,
             	conf: 'Sugon Cluster W580I, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 382,
             	eff: 4713.60,
             	conf: 'Cluster Platform DL360e Gen8, Xeon E5-2450L 8C 1.800GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 383,
             	eff: 400.00,
             	conf: 'Sugon TC5000, Xeon E7-4830 8C 2.13GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 384,
             	eff: 347.27,
             	conf: 'iDataPlex DX360M4, Intel Xeon E5-2697v2 12C 2.700GHz, Infiniband FDR14',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 385,
             	eff: 4681.20,
             	conf: 'Cluster Platform DL360e Gen8, Xeon E5-2450L 8C 1.800GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 386,
             	eff: 400.68,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 387,
             	eff: 636.00,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 388,
             	eff: 443.20,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 389,
             	eff: 98.00,
             	conf: 'Inspur TS10000, Xeon E5-2630v3 8C 2.4GHz, 40G Ethernet, NVIDIA Tesla K80/K40',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 390,
             	eff: 421.20,
             	conf: 'Xtreme-X , Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 391,
             	eff: 448.00,
             	conf: 'Xtreme-X GreenBlade GB512X, Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 392,
             	eff: 513.00,
             	conf: 'Lenovo x3650, Xeon E5-2660v3 10C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 393,
             	eff: 500.00,
             	conf: 'Bullx B510, Xeon E5-2680 8C 2.700GHz, Infiniband QDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 394,
             	eff: 2124.00,
             	conf: 'Cluster Platform DL380p Gen8 , Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 395,
             	eff: 159.64,
             	conf: 'Cray XC40, Xeon E5-2690v3 12C 2.6GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 396,
             	eff: 465.00,
             	conf: 'Lenovo RD450, Xeon E5-2683v3 14C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 397,
             	eff: 369.90,
             	conf: 'Cluster Platform SL230s Gen8, Intel Xeon E5-2670v2  10C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 398,
             	eff: 174.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2698v3 16C 2.3GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 399,
             	eff: 186.60,
             	conf: 'HP Apollo 6000 Xl230/250 , Xeon E5-2670v3 12C 2.3GHz, Infiniband FDR, Intel Xeon Phi 7120P',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 400,
             	eff: 615.60,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2630v3 8C 2.4GHz, Infiniband QDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 401,
             	eff: 737.33,
             	conf: 'Fujitsu PRIMERGY CX400, Xeon E5-2697v3 14C 2.6GHz, Infiniband FDR',
             	color: '#00008B'
             },
             
             
            
             {
             	rank: 402,
             	eff: 210.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 403,
             	eff: 1382.40,
             	conf: 'SGI ICE X, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 404,
             	eff: 720.00,
             	conf: 'Sugon TC5000, Opteron 6376 16C 2.3GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 405,
             	eff: 440.00,
             	conf: 'Sugon TC5000, Opteron 6348 12C 2.8GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 406,
             	eff: 4809.00,
             	conf: 'Cluster Platform 4000 BL465c, Opteron O-6376 16C 2.3GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 407,
             	eff: 421.20,
             	conf: 'Xtreme-X , Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 408,
             	eff: 293.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 409,
             	eff: 356.82,
             	conf: 'IBM NeXtScale nx360M4, Intel Xeon E5-2670v2  10C 2.5GHz, Infiniband FDR',
             	color: '#A9A9A9'
             },
             
             
            
             {
             	rank: 410,
             	eff: 550.00,
             	conf: 'Nitro G16 3GPU, Xeon E5-2650 8C 2GHz, Infiniband FDR, Nvidia K20m',
             	color: '#CD5C5C'
             },
             
             
            
             {
             	rank: 411,
             	eff: 780.00,
             	conf: 'Lenovo x3950, Xeon  E7-8850V2 12C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 412,
             	eff: 480.00,
             	conf: 'Sugon TC5000, Xeon E5-2620 6C 2GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 413,
             	eff: 151.00,
             	conf: 'MEGWARE MiriQuid, Xeon E5-2680v4 14C 2.4GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#4B0082'
             },
             
             
            
             {
             	rank: 414,
             	eff: 386.56,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Xeon E5-2670 8C 2.60GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 415,
             	eff: 282.00,
             	conf: 'bullx B510/B520, Intel Xeon E5-2690v3/E5-2697v2 12C 2.7GHz, Infiniband QDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 416,
             	eff: 453.60,
             	conf: 'Xtreme-X GreenBlade GB512X, Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 417,
             	eff: 414.80,
             	conf: 'IBM Flex System p460, POWER7  8C 3.550GHz, Infiniband QDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 418,
             	eff: 345.60,
             	conf: 'HP Apollo XL7x0f, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 419,
             	eff: 373.97,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 420,
             	eff: 373.97,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 421,
             	eff: 614.25,
             	conf: 'Lenovo RD450, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 422,
             	eff: 414.40,
             	conf: 'Cluster Platform DL360, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 423,
             	eff: 205.00,
             	conf: 'ClusterVision RS720Q/RS700, Xeon E5-2640v3 8C 2.6GHz, Infiniband QDR',
             	color: '#1E90FF'
             },
             
             
            
             {
             	rank: 424,
             	eff: 380.00,
             	conf: 'Sugon TC5000, Intel Xeon E5-2420v2 6C 2.2GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 425,
             	eff: 4323.60,
             	conf: 'Cluster Platform DL360e Gen8, Xeon E5-2450L 8C 1.800GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 426,
             	eff: 184.62,
             	conf: 'HP Apollo 6000 Xl230/250 , Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 427,
             	eff: 1996.80,
             	conf: 'Cluster Platform DL380p Gen8 , Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 428,
             	eff: 862.50,
             	conf: 'Lenovo RD350, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 429,
             	eff: 2456.40,
             	conf: 'SGI ICE 8400EX, Xeon X5690 6C 3.470GHz, Infiniband QDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 430,
             	eff: 1500.00,
             	conf: 'Lenovo RD940, Xeon E7-4820V2 8C 2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 431,
             	eff: 610.80,
             	conf: 'Cluster Platform 3000 BL460c Gen9, Xeon E5-2660v3 10C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 432,
             	eff: 610.80,
             	conf: 'Cluster Platform 3000 BL460c Gen9, Xeon E5-2660v3 10C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 433,
             	eff: 630.00,
             	conf: 'Bullx B71x, Intel Xeon E5-2695v2 12C 2.4GHz, Infiniband FDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 434,
             	eff: 1267.20,
             	conf: 'Cluster Platform SL250s Gen8, Xeon E5-2670 8C 2.600GHz, Infiniband FDR, NVIDIA 2090',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 435,
             	eff: 349.60,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 436,
             	eff: 446.40,
             	conf: 'Bullx B510, Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 437,
             	eff: 2759.40,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2630 6C 2.300GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 438,
             	eff: 95.00,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2698v3 16C 2.3GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 439,
             	eff: 1399.50,
             	conf: 'Cluster Platform SL250s Gen8, Intel Xeon E5-2670v2  10C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 440,
             	eff: 57.15,
             	conf: 'ASUS ESC4000 FDR/G2S, Intel Xeon E5-2690v2 10C 3GHz, Infiniband FDR, AMD FirePro S9150',
             	color: '#FFFFF0'
             },
             
             
            
             {
             	rank: 441,
             	eff: 526.02,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 442,
             	eff: 491.25,
             	conf: 'Lenovo x3550, Xeon E5-2650v3 10C 2.3GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 443,
             	eff: 595.20,
             	conf: 'Cluster Platform 3000 BL460c, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 444,
             	eff: 2445.30,
             	conf: 'Cluster Platform DL380p Gen8 , Xeon E5-2640 6C 2.500GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 445,
             	eff: 300.00,
             	conf: 'Lenovo x240 M5, Xeon E5-2690v3 12C 2.6GHz, Infiniband FDR',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 446,
             	eff: 65.00,
             	conf: 'Sugon Cluster W780I, Xeon E5-2640v3 8C 2.6GHz, Infiniband QDR, NVIDIA Tesla K80',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 447,
             	eff: 2432.70,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2640 6C 2.500GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 448,
             	eff: 660.00,
             	conf: 'Sugon TC6000, Xeon E5-2609v3 6C 1.9GHz, 10G Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 449,
             	eff: 408.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 450,
             	eff: 408.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 451,
             	eff: 408.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 452,
             	eff: 408.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 453,
             	eff: 408.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 454,
             	eff: 408.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 455,
             	eff: 819.52,
             	conf: 'Cluster Platform DL380, Xeon E5-2650v3 10C 2.3GHz, 10G Ethernet, NVIDIA Tesla K40',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 456,
             	eff: 165.30,
             	conf: 'Cray XC40, Xeon E5-2695v3 14C 2.3GHz, Aries interconnect ',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 457,
             	eff: 637.20,
             	conf: 'Lenovo NeXtScale nx360M5, Xeon E5-2640v3 8C 2.6GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 458,
             	eff: 1206.00,
             	conf: 'Cluster Platform SL230s Gen8, Intel Xeon E5-2680v2  10C 2.8GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 459,
             	eff: 96.00,
             	conf: 'Sugon Cluster, Xeon E5-2620v3 6C 2.4GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 460,
             	eff: 347.26,
             	conf: 'iDataPlex DX360M4, Xeon E5-2670 8C 2.600GHz, Infiniband FDR',
             	color: '#00FFFF'
             },
             
             
            
             {
             	rank: 461,
             	eff: 188.00,
             	conf: 'Inspur TS10000 HPC Server, Xeon E5-2650v3 10C 2GHz, 10G Ethernet',
             	color: '#9400D3'
             },
             
             
            
             {
             	rank: 462,
             	eff: 2364.30,
             	conf: 'Cluster Platform DL380p Gen8 , Xeon E5-2640 6C 2.500GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 463,
             	eff: 201.96,
             	conf: 'Clustervision MD30-RS0, Xeon E5-2630v3 8C 2.4GHz, Intel Omni-Path',
             	color: '#F0E68C'
             },
             
             
            
             {
             	rank: 464,
             	eff: 94.80,
             	conf: 'Dell C4130, Xeon E5-2650v3/2650v2 10C/8C 2/2.6GHz, Infiniband FDR, NVIDIA Tesla K40m/K20M',
             	color: '#B8860B'
             },
             
             
            
             {
             	rank: 465,
             	eff: 765.00,
             	conf: 'Lenovo RD450, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 466,
             	eff: 270.00,
             	conf: 'Lenovo x3950, Xeon E7-8860v3  16C 2.2GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 467,
             	eff: 416.78,
             	conf: 'SuperServer 2022TG-GIBQRF, Opteron 6172 12C 2.1GHz, Infiniband QDR, ATI HD 5870',
             	color: '#E6E6FA'
             },
             
             
            
             {
             	rank: 468,
             	eff: 2227.20,
             	conf: 'Cluster Platform SL230s Gen8, Xeon E5-2670 8C 2.600GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 469,
             	eff: 174.00,
             	conf: 'Atipa Cluster, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#8B008B'
             },
             
             
            
             {
             	rank: 470,
             	eff: 174.00,
             	conf: 'Atipa Cluster, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#8B008B'
             },
             
             
            
             {
             	rank: 471,
             	eff: 396.00,
             	conf: 'Cluster Platform DL380, Xeon E5-2673v3 12C 2.4GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 472,
             	eff: 1824.00,
             	conf: 'Cluster Platform DL380p Gen8 , Intel Xeon E5-2650v2  8C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 473,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2680v3 12C 2.5GHz, Infiniband QDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 474,
             	eff: 1592.48,
             	conf: 'Cray XE6, Opteron 6276 16C 2.30GHz, Cray Gemini interconnect',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 475,
             	eff: 1344.00,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Intel Xeon E5-2690v2 10C 3GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 476,
             	eff: 1344.00,
             	conf: 'Cluster Platform 3000 BL460c Gen8, Intel Xeon E5-2690v2 10C 3GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 477,
             	eff: 1726.32,
             	conf: 'Cray XE6 12-core 2.2 GHz',
             	color: '#DC143C'
             },
             
             
            
             {
             	rank: 478,
             	eff: 220.00,
             	conf: 'Sugon Cluster TC4600E, Xeon E5-2680v3 12C 2.5GHz, Infiniband EDR',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 479,
             	eff: 3168.00,
             	conf: 'Cluster Platform SL390s G7, Xeon X5650 6C 2.66GHz, Gigabit Ethernet, NVIDIA 2090',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 480,
             	eff: 236.25,
             	conf: 'Bull R421-E4 Cluster, Xeon E5-2698v3 16C 2.3GHz, Infiniband FDR, NVIDIA Tesla K80',
             	color: '#BDB76B'
             },
             
             
            
             {
             	rank: 481,
             	eff: 115.00,
             	conf: 'Sugon Cluster W580I, Intel Xeon E5-2620v2 6C 2.1GHz, 10G Ethernet, NVIDIA Tesla K20',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 482,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL230a, Xeon E5-2680v3 12C 2.5GHz, Infiniband FDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 483,
             	eff: 2944.80,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2620 6C 2.000GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 484,
             	eff: 182.00,
             	conf: 'MEGWARE MiriQuid, Xeon E5-2630v3/2640v3 8C 2.4/2.6GHz, Infiniband QDR',
             	color: '#CD5C5C'
             },
             
             
            
             {
             	rank: 485,
             	eff: 300.00,
             	conf: 'Sugon TC6000, Intel Xeon E5-2650v2  8C 2.6GHz, Gigabit Ethernet',
             	color: '#8B0000'
             },
             
             
            
             {
             	rank: 486,
             	eff: 46.89,
             	conf: 'ZettaScaler-1.6, Xeon E5-2618Lv3  8C 2.3GHz, Infiniband FDR, PEZY-SCnp',
             	color: '#2F4F4F'
             },
             
             
            
             {
             	rank: 487,
             	eff: 2250.00,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2640 6C 2.500GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 488,
             	eff: 1401.60,
             	conf: 'Cluster Platform SL250s Gen8, Xeon E5-2670 8C 2.600GHz, Infiniband QDR',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 489,
             	eff: 201.78,
             	conf: 'GPU Blade Cluster, Intel Xeon E5-2660v2 10C 2.2GHz, Infiniband FDR, NVIDIA K20',
             	color: '#FFF0F5'
             },
             
             
            
             {
             	rank: 490,
             	eff: 2484.00,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2650Lv2 10C 1.7GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 491,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2690v3 12C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 492,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2690v3 12C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 493,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2690v3 12C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 494,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2690v3 12C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 495,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2690v3 12C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 496,
             	eff: 530.00,
             	conf: 'Apollo 6000 XL2x0a, Xeon E5-2690v3 12C 2.6GHz, 10G Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 497,
             	eff: 783.75,
             	conf: 'Lenovo x3550, Xeon E5-2620v3 6C 2.4GHz, 10G Ethernet',
             	color: '#FF8C00'
             },
             
             
            
             {
             	rank: 498,
             	eff: 294.00,
             	conf: 'RSC Tornado, Xeon X5680 6C 3.330GHz, Infiniband QDR, Intel Xeon Phi SE10X',
             	color: '#696969'
             },
             
             
            
             {
             	rank: 499,
             	eff: 2218.50,
             	conf: 'Cluster Platform DL360p Gen8, Xeon E5-2640 6C 2.500GHz, Gigabit Ethernet',
             	color: '#008B8B'
             },
             
             
            
             {
             	rank: 500,
             	eff: 95.20,
             	conf: 'Inspur TS10000, Intel Xeon E5-2650v2  8C 2.6GHz, 40G Ethernet, NVIDIA Tesla K20',
             	color: '#9400D3'
             },
             
             
             ];
			AmCharts.ready(function () {
                // XY CHART
                chart = new AmCharts.AmXYChart();
                chart.pathToImages = "/static/media/amcharts/";
                chart.panEventsEnabled = true;
                chart.dataProvider = chartData;
                chart.marginRight = 0;
                chart.marginTop = 0;
                chart.startDuration = 1;

                // AXES
                // X
                var xAxis = new AmCharts.ValueAxis();
                xAxis.position = "bottom";
                xAxis.dashLength = 1;
                xAxis.axisAlpha = 0;
                xAxis.maximum=500;
                xAxis.minimum = 1;
                xAxis.maxValue = "500";
                xAxis.autoGridCount = true;
                chart.addValueAxis(xAxis);

                // Y
                var yAxis = new AmCharts.ValueAxis();
                yAxis.position = "left";
                yAxis.dashLength = 1;
                yAxis.axisAlpha = 0;
                yAxis.logarithmic = true;
                yAxis.recalculateToPercents = false;
                yAxis.autoGridCount = true;
                
                    yAxis.title = "Power (kWatts)"
                
                chart.addValueAxis(yAxis);


                // GRAPHS
                // triangles up
                var graph1 = new AmCharts.AmGraph();
                graph1.lineColor = "#FF6600";
                
                	graph1.balloonText = "[[description]]\n Rank: [[x]]\nAbsolute Power Consumption: [[y]] kW";
                
                graph1.xField = "rank";
                graph1.yField = "eff";
                graph1.colorField = "color"
                graph1.descriptionField = "conf"
                graph1.lineAlpha = 0;
                graph1.bullet = "triangleUp";
                chart.addGraph(graph1);


                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chart.addChartCursor(chartCursor);

                // SCROLLBAR
                var chartScrollbar = new AmCharts.ChartScrollbar();
                chart.addChartScrollbar(chartScrollbar);

				var legend = new AmCharts.AmLegend();
				legend.valueText = "[[description]]";
				chart.labelText = "[[description]]";
				chart.addLegend(legend);
				chart.useMarkerColorForLabels = true;

                chart.write("chartdiv");
            });
        </script>



    
    <script type="text/javascript" src="/static/dajax/jquery.dajax.core.js"></script>
    <!--[if lt IE 9]>
    <script src="/static/js/html5shiv.js"></script>
    <script src="/static/js/respond.min.js"></script>
    <![endif]-->

    

</head>
<body id="body">

<ul id="social-icons">
    <li><a class="twitter" href="https://twitter.com/top500supercomp" title="Follow us on Twitter" target="_blank">Twitter</a>
    </li>
    <li><a class="fb" href="https://www.facebook.com/top500.org" title="Follow us on Facebook"
           target="_blank">Facebook</a></li>
</ul>


<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 left header">
            
                
                

                <img src="/static//images/Top500_logo.png" width="150" style="margin-left: 10px;"/>
            
        </div>
        <div class="col-sm-12 col-md-6 col-lg-9">
            <div class="leaderboard">
                
                    <!-- leadearboard -->
                    <div id='div-gpt-ad-1416441378536-15' style='width:728px; height:90px;'>
                        <script type='text/javascript'>
                            googletag.cmd.push(function () {
                                googletag.display('div-gpt-ad-1416441378536-15');
                            });
                        </script>
                    </div>
                
            </div>
            <div class="leaderboard_mobile">
                <div id='div-gpt-ad-1488790360617-0' style='height:50px; width:320px;'>
                    <script>
                        googletag.cmd.push(function () {
                            googletag.display('div-gpt-ad-1488790360617-0');
                        });
                    </script>
                </div>
            </div>


        </div>
    </div>
</div>

<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse" style="border: none;">
            
<form action="/search/" class="navbar-form navbar-right" role="search">

<div class="form-group">
    <input class="form-control" placeholder="Search" type="text" name="q" value="">
</div>



<input type="submit" class="btn btn-default" value="Go">

</form>

            
                
<ul class="nav navbar-nav"><li id="dropdown-menu-home"><a href="/">Home</a></li><li class="dropdown
               "
        id="news"><a href="/news/"
        
        class="dropdown-toggle disabled" data-toggle="dropdown"
        >
            News
            <b class="caret"></b></a><ul class="dropdown-menu"><li class="
               "
        id="news-category-in-depth"><a href="/news/category/in-depth/">In Depth News</a></li><li class="
               "
        id="news-category-this-week-in-hpc"><a href="/news/category/this-week-in-hpc/">This Week in HPC</a></li></ul></li><li class="dropdown
               "
        id="lists"><a href="/lists/"
        
        class="dropdown-toggle disabled" data-toggle="dropdown"
        >
            Lists
            <b class="caret"></b></a><ul class="dropdown-menu"><li class="dropdown-submenu
               "
        id="lists-top500"><a href="/lists/top500/">TOP500</a><ul class="dropdown-menu"><li class="
               "
        id="lists-2018-06"><a href="/lists/2018/06/">June 2018</a></li><li class="
               "
        id="lists-2017-11"><a href="/lists/2017/11/">November 2017</a></li><li class="
               "
        id="lists-2017-06"><a href="/lists/2017/06/">June 2017</a></li><li class="
               "
        id="lists-2016-11"><a href="/lists/2016/11/">November 2016</a></li><li class="
               "
        id="lists-2016-06"><a href="/lists/2016/06/">June 2016</a></li><li class="
               "
        id="lists-2015-11"><a href="/lists/2015/11/">November 2015</a></li><li class="
               "
        id="lists-2015-06"><a href="/lists/2015/06/">June 2015</a></li><li class="
               "
        id="lists-2014-11"><a href="/lists/2014/11/">November 2014</a></li><li class="dropdown-submenu
               "
        id="lists-2014-06"><a href="/lists/2014/06/">June 2014</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2014-06-highlights"><a href="/lists/top500/2014/06/highlights/">Highlights of the 43rd TOP500 List</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2013-11"><a href="/lists/2013/11/">November 2013</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2013-11-highlights"><a href="/lists/top500/2013/11/highlights/">Highlights - November 2013</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2013-06"><a href="/lists/2013/06/">June 2013</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2013-06-highlights"><a href="/lists/top500/2013/06/highlights/">Highlights  - June 2013</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2012-11"><a href="/lists/2012/11/">November 2012</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2012-11-highlights"><a href="/lists/top500/2012/11/highlights/">Highlights - November 2012</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2012-06"><a href="/lists/2012/06/">June 2012</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2012-06-highlights"><a href="/lists/top500/2012/06/highlights/">Highlights: June 2012</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2011-11"><a href="/lists/2011/11/">November 2011</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2011-11-highlights"><a href="/lists/top500/2011/11/highlights/">Highlights: November 2011</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2011-06"><a href="/lists/2011/06/">June 2011</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2011-06-highlights"><a href="/lists/top500/2011/06/highlights/">Highlights: June 2011</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2010-11"><a href="/lists/2010/11/">November 2010</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2010-11-highlights"><a href="/lists/top500/2010/11/highlights/">Highlights: November 2010</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2010-06"><a href="/lists/2010/06/">June 2010</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2010-06-highlights"><a href="/lists/top500/2010/06/highlights/">June 2010 - Highlights</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2009-11"><a href="/lists/2009/11/">November 2009</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2009-11-highlights"><a href="/lists/top500/2009/11/highlights/">Highlights - November 2009</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2009-06"><a href="/lists/2009/06/">June 2009</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2009-06-highlights"><a href="/lists/top500/2009/06/highlights/">Highlights - June 2009</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2008-11"><a href="/lists/2008/11/">November 2008</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2008-11-highlights"><a href="/lists/top500/2008/11/highlights/">Highlights - November 2008</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2008-06"><a href="/lists/2008/06/">June 2008</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2008-06-highlights"><a href="/lists/top500/2008/06/highlights/">Highlights - June 2008</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2007-11"><a href="/lists/2007/11/">November 2007</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2007-11-highlights"><a href="/lists/top500/2007/11/highlights/">Highlights - November 2007</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2007-06"><a href="/lists/2007/06/">June 2007</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2007-06-highlights"><a href="/lists/top500/2007/06/highlights/">Highlights - June 2007</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2006-11"><a href="/lists/2006/11/">November 2006</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2006-11-highlights"><a href="/lists/top500/2006/11/highlights/">Highlights - November 2006</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2006-06"><a href="/lists/2006/06/">June 2006</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2006-06-highlights"><a href="/lists/top500/2006/06/highlights/">Highlights - June 2006</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2005-11"><a href="/lists/2005/11/">November 2005</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2005-11-highlights"><a href="/lists/top500/2005/11/highlights/">Highlights - November 2005</a></li></ul></li><li class="dropdown-submenu
               "
        id="lists-2005-06"><a href="/lists/2005/06/">June 2005</a><ul class="dropdown-menu"><li class="
               "
        id="lists-top500-2005-06-highlights"><a href="/lists/top500/2005/06/highlights/">Highlights - June 2005</a></li></ul></li></ul></li><li class="dropdown-submenu
               "
        id="hpcg"><a href="/hpcg/">HPCG</a><ul class="dropdown-menu"><li class="
               "
        id="hpcg-lists-2018-06"><a href="/hpcg/lists/2018/06/">HPCG - June 2018</a></li><li class="
               "
        id="hpcg-lists-2017-11"><a href="/hpcg/lists/2017/11/">HPCG - November 2017</a></li></ul></li><li class="
               "
        id="green500"><a href="/green500/">GREEN500</a></li><li class="dropdown-submenu
               "
        id="scc"><a href="/scc/">Student Cluster Competition</a><ul class="dropdown-menu"><li class="
               "
        id="scc-guidelines"><a href="/scc/guidelines/">SCC Guidelines</a></li></ul></li></ul></li><li class="dropdown
               active"
        id="statistics"><a href="/statistics/"
        
        class="dropdown-toggle disabled" data-toggle="dropdown"
        >
            Statistics
            <b class="caret"></b></a><ul class="dropdown-menu"><li class="
               "
        id="statistics-sublist"><a href="/statistics/sublist/">Sublist Generator</a></li><li class="
               "
        id="statistics-list"><a href="/statistics/list/">List Statistics</a></li><li class="
               "
        id="statistics-overtime"><a href="/statistics/overtime/">Development over Time</a></li><li class="
               "
        id="statistics-treemaps"><a href="/statistics/treemaps/">Treemaps</a></li><li class="
               active"
        id="statistics-efficiency-power-cores"><a href="/statistics/efficiency-power-cores/">Efficiency, Power, Cores...</a></li><li class="
               "
        id="statistics-perfdevel"><a href="/statistics/perfdevel/">Performance Development</a></li></ul></li><li class="dropdown
               "
        id="resources"><a href="/resources/"
        
        class="dropdown-toggle disabled" data-toggle="dropdown"
        >
            Resources
            <b class="caret"></b></a><ul class="dropdown-menu"><li class="
               "
        id="certificates"><a href="/certificates/">TOP500 Certificates</a></li><li class="
               "
        id="resources-top-systems"><a href="/resources/top-systems/">TOP #1 Systems</a></li><li class="
               "
        id="timeline"><a href="/timeline/">TOP500 Timeline</a></li><li class="
               "
        id="resources-presentations"><a href="/resources/presentations/">Presentations</a></li><li class="
               "
        id="resources-videos"><a href="/resources/videos/">Videos</a></li><li class="
               "
        id="resources-frequently-asked-questions"><a href="/resources/frequently-asked-questions/">Frequently Asked Questions</a></li><li class="
               "
        id="resources-top500-logo-usage"><a href="/resources/top500-logo-usage/">TOP500 Logo Usage</a></li></ul></li><li class="dropdown
               "
        id="project"><a href="/project/"
        
        class="dropdown-toggle disabled" data-toggle="dropdown"
        >
            About
            <b class="caret"></b></a><ul class="dropdown-menu"><li class="
               "
        id="project-call_for_participation"><a href="/project/call_for_participation/">Call for Participation in the TOP500 / Green500 Lists</a></li><li class="
               "
        id="project-introduction"><a href="/project/introduction/">Introduction and Objectives</a></li><li class="
               "
        id="project-linpack"><a href="/project/linpack/">The Linpack Benchmark</a></li><li class="
               "
        id="project-top500_description"><a href="/project/top500_description/">TOP500 Description  </a></li><li class="dropdown-submenu
               "
        id="project-authors"><a href="/project/authors/">TOP500 Authors</a><ul class="dropdown-menu"><li class="
               "
        id="project-authors-hans-werner-meuer"><a href="/project/authors/hans-werner-meuer/">Hans Werner Meuer (1936 - 2014†) </a></li><li class="
               "
        id="project-authors-erich-strohmaier"><a href="/project/authors/erich-strohmaier/">Erich Strohmaier</a></li><li class="
               "
        id="project-authors-jack-dongarra"><a href="/project/authors/jack-dongarra/">Jack Dongarra</a></li><li class="
               "
        id="project-authors-horst-simon"><a href="/project/authors/horst-simon/">Horst Simon</a></li><li class="
               "
        id="project-authors-martin-meuer"><a href="/project/authors/martin-meuer/">Martin Meuer</a></li></ul></li><li class="
               "
        id="project-top500-news-team"><a href="/project/top500-news-team/">TOP500 News Team</a></li></ul></li><li class="
               "
        id="mediakit"><a href="/mediakit/"
        >
            Media Kit
            
        </a></li><li class="active" id="dropdown-menu-home"><a href="/green500/"">Green500</a></li></ul>

            
        </div>
    </div>
</nav>



<div class="container header_space">
    <div class="row">
        <div class="col-sm-12 col-md-9 col-lg-9" style="border: none; padding-left: 30px;">
            
                
            

            

            
    



            
                
                    <ul class="breadcrumb">
                        <li id="breadcrumb-menu-home"><a href="/">Home</a></li><li id="breadcrumb-menu-statistics"><a href="/statistics/">Statistics</a></li><li id="breadcrumb-menu-statistics-efficiency-power-cores"
        class="active">Efficiency, Power, Cores...</li>
                    </ul>
                


                <h1 class="page-title">
                    Efficiency, Power, Cores...
                </h1>
            
            


<p><strong>R<sub>max</sub></strong> and <strong>R<sub>peak</sub></strong> values are in GFlops. For more details about other fields, check the <a href="/project/top500_description">TOP500 description</a>.
    <p><strong>R<sub>peak</sub></strong> values are calculated using the advertised clock rate of the CPU. For the efficiency of the systems you
        should take into account the Turbo CPU clock rate where it applies.</p>
<!--
            <div id='div-gpt-ad-1453380928566-0' style='padding-top: 15px; text-align:center; width:280px; height:280px;'>
<script type='text/javascript'>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1453380928566-0'); });
</script>
</div>
-->

<fieldset>
    <legend></legend>
    <form method="post">
    


<input type="hidden" name="referrer" value="https://www.top500.org/statistics/efficiency-power-cores/">
<input type='hidden' name='csrfmiddlewaretoken' value='vZLTYuJrIedOuyAKYj3XtzzW4m43k6Qh' />




<div class="form-group input_id_type_field 
    ">
    <label class="control-label" for="id_type_field">Chart Type</label>
    <select id="id_type_field" name="type_field">
<option value="eff">Efficiency</option>
<option value="peff">Power Efficiency</option>
<option value="power" selected="selected">Power</option>
<option value="cores">Cores</option>
<option value="rmax">Rmax</option>
</select>
    
</div>



<div class="form-group input_id_t500list 
    ">
    <label class="control-label" for="id_t500list">TOP500 Release</label>
    <select id="id_t500list" name="t500list">
<option value="51">June 2018</option>
<option value="50">November 2017</option>
<option value="49">June 2017</option>
<option value="48">November 2016</option>
<option value="47" selected="selected">June 2016</option>
<option value="46">November 2015</option>
<option value="45">June 2015</option>
<option value="44">November 2014</option>
<option value="43">June 2014</option>
<option value="42">November 2013</option>
<option value="41">June 2013</option>
<option value="40">November 2012</option>
<option value="39">June 2012</option>
<option value="38">November 2011</option>
<option value="37">June 2011</option>
<option value="36">November 2010</option>
<option value="35">June 2010</option>
<option value="34">November 2009</option>
<option value="33">June 2009</option>
<option value="32">November 2008</option>
<option value="31">June 2008</option>
<option value="30">November 2007</option>
<option value="29">June 2007</option>
<option value="28">November 2006</option>
<option value="27">June 2006</option>
<option value="26">November 2005</option>
<option value="25">June 2005</option>
<option value="24">November 2004</option>
<option value="23">June 2004</option>
<option value="22">November 2003</option>
<option value="21">June 2003</option>
<option value="20">November 2002</option>
<option value="19">June 2002</option>
<option value="18">November 2001</option>
<option value="17">June 2001</option>
<option value="16">November 2000</option>
<option value="15">June 2000</option>
<option value="14">November 1999</option>
<option value="13">June 1999</option>
<option value="12">November 1998</option>
<option value="11">June 1998</option>
<option value="10">November 1997</option>
<option value="9">June 1997</option>
<option value="8">November 1996</option>
<option value="7">June 1996</option>
<option value="6">December 1995</option>
<option value="5">June 1995</option>
<option value="4">November 1994</option>
<option value="3">June 1994</option>
<option value="2">November 1993</option>
<option value="1">June 1993</option>
</select>
    
</div>



<div class="form-group input_id_stats_type 
    ">
    <label class="control-label" for="id_stats_type">Category</label>
    <select id="id_stats_type" name="stats_type">
<option value="vendor" selected="selected">Vendors</option>
<option value="app">Application Area</option>
<option value="accel">Accelerator/Co-Processor</option>
<option value="segment">Segments</option>
<option value="continent">Continents</option>
<option value="connfam">Interconnect Family</option>
<option value="interconnect">Interconnect</option>
<option value="country">Countries</option>
<option value="region">Geographical Region</option>
<option value="procgen">Processor Generation</option>
<option value="accelfam">Accelerator/CP Family</option>
<option value="architecture">Architecture</option>
<option value="osfam">Operating system Family</option>
<option value="cores">Cores per Socket</option>
<option value="os">Operating System</option>
</select>
    
</div>



    <div class="form-actions">
        <input class="btn btn-default" type="submit" value="Submit">
    </div>
    </form>
</fieldset>

</p>

 <div id="chartdiv" style="width: 100%; height: 600px;"></div>


 <p>Legend:</p>
 <p>
 

 <span style="color: #00FFFF">IBM</span>,
 

 <span style="color: #E9967A">Hitachi/Fujitsu</span>,
 

 <span style="color: #006400">Lenovo/IBM</span>,
 

 <span style="color: #A9A9A9">NEC/HPE</span>,
 

 <span style="color: #9400D3">Inspur</span>,
 

 <span style="color: #8FBC8F">Huawei</span>,
 

 <span style="color: #556B2F">T-Platforms</span>,
 

 <span style="color: #FFFFF0">Gigabyte/ClusterVision</span>,
 

 <span style="color: #B8860B">Dell EMC</span>,
 

 <span style="color: #8B0000">Sugon</span>,
 

 <span style="color: #1E90FF">ClusterVision</span>,
 

 <span style="color: #228B22">Adtech</span>,
 

 <span style="color: #2F4F4F">Dell / Intel</span>,
 

 <span style="color: #CD5C5C">MEGWARE</span>,
 

 <span style="color: #F0E68C">Clustervision/Supermicro</span>,
 

 <span style="color: #E6E6FA">Niagara Computers, Supermicro</span>,
 

 <span style="color: #DCDCDC">IPE, Nvidia, Tyan</span>,
 

 <span style="color: #808080">SuperMicro/Mellanox</span>,
 

 <span style="color: #DC143C">Cray Inc.</span>,
 

 <span style="color: #FF69B4">Xenon Systems</span>,
 

 <span style="color: #BDB76B">Bull</span>,
 

 <span style="color: #FF1493">ACTION</span>,
 

 <span style="color: #6495ED">NUDT</span>,
 

 <span style="color: #FF8C00">Lenovo</span>,
 

 <span style="color: #00CED1">Intel</span>,
 

 <span style="color: #FF00FF">DALCO</span>,
 

 <span style="color: #B22222">NEC</span>,
 

 <span style="color: #8B008B">Atipa</span>,
 

 <span style="color: #DAA520">Self-made</span>,
 

 <span style="color: #A9A9A9">IBM/Lenovo</span>,
 

 <span style="color: #00008B">Fujitsu</span>,
 

 <span style="color: #2F4F4F">PEZY Computing / Exascaler Inc.</span>,
 

 <span style="color: #ADFF2F">Netweb Technologies</span>,
 

 <span style="color: #008B8B">HPE</span>,
 

 <span style="color: #483D8B">Megatel/Action</span>,
 

 <span style="color: #008000">EXXACT</span>,
 

 <span style="color: #696969">Supermicro</span>,
 

 <span style="color: #9932CC">T-Platforms, Intel, Dell</span>,
 

 <span style="color: #808080">Oracle</span>,
 

 <span style="color: #FF7F50">NRCPC</span>,
 

 <span style="color: #4B0082">AMD, ASUS, FIAS, GSI</span>,
 

 <span style="color: #696969">RSC Group</span>,
 
</p>




        </div>

        <!-- Right Section / Side Bar -->
        <div class="col-sm-12 col-md-3 col-lg-3">

            
                <div id="right" style="width: 250px;">
                    <ul class="kachel-nav ">
                        
                            <li><a class="top500" title="TOP500" href="/">TOP500</a></li>
                        
                        <li><a class="list" title="Current List" href="/lists/2017/11"><h1>Current List</h1></a></li>
			<li><a class="anniv" title="25 Year Anniversary" href="/25years"><h1>25 Year Anniversary</h1></a></li>
                        <li><a class="newsletter" title="Newsletter" href="/newsletter/"><h1>Newsletter Signup</h1></a></li>
                    </ul>
                </div>
            
	    
		
	    
            

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 20px;">

                         
                                            <!-- 2013_square_popup_1 -->
                    <div id='div-gpt-ad-1416441378536-5' style='height: 250px;'>
                        <script type='text/javascript'>
                            googletag.cmd.push(function () {
                                googletag.display('div-gpt-ad-1416441378536-5');
                            });
                        </script>
                    </div>
</td>
                        


                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 20px;">
                        
<div id='div-gpt-ad-1453380928566-0' style='height: 250px;'>
<script type='text/javascript'>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1453380928566-0'); });
</script>
</div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 20px;">
                        <!-- /2924242/2013_square_popup_3 -->
<div id='div-gpt-ad-1509611081669-0' style='height:250px; width:250px;'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1509611081669-0'); });
</script>
</div>
                    </div>
                </div>


            

            

                <div class="panel">
<br>
<a class="twitter-timeline" href="https://twitter.com/top500supercomp" data-widget-id="484299292631240705">Tweets by @top500supercomp</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
                                <div class="panel">
                    <iframe src="https://www.facebook.com/plugins/like.php?app_id=124489460969110&amp;href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FTop500-Supercomputing-Sites%2F203473106331290&amp;send=false&amp;layout=standard&amp;width=250&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:250px; height:80px;" allowTransparency="true"></iframe>
                </div>
                

            
            <div class="panel">
                
            </div>

        </div>
    </div>
</div>


<footer>
    <div class="container">
        <div class="row">
            <p class="site-info text-left">
                <a href="/imprint" class="footer-link">Imprint</a>
                <a href="/contact" class="footer-link">Contact</a>


    <a class="footer-link" href="/accounts/login/?next=/statistics/efficiency-power-cores/">
        Log in</a>
    <a  class="footer-link" href="/accounts/signup/?next=/statistics/efficiency-power-cores/" >
        Sign up</a>

<br/>
                Copyright 1993-2018 TOP500.org (c)<span class="separator"></span>

                
            </p>
        </div>
    </div>
</footer>










<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-325590-1', 'auto');
ga('send', 'pageview');
</script>


<script type="text/javascript">stLight.options({
    publisher: "6e84614a-3a9a-44ea-804c-ea3a907fc8d7",
    doNotHash: false,
    doNotCopy: false,
    hashAddressBar: false
});</script>
</body>
</html>