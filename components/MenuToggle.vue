<template>
    <div class="fixed z-30 bottom-0 my-5 w-full text-center"> 
        <button @click="isOpenMenu = !isOpenMenu" @mouseenter="cursorIsHovering = true" @mouseleave="cursorIsHovering = false" 
            class="button bg-[#ACA393] h-12 w-12 rounded-full opacity-80">
            <Icon v-if="isOpenMenu" name="mingcute:close-fill" color="white" size="20"/>
            <Icon v-else name="mingcute:menu-fill" color="white" size="20"/>
            <svg v-if="isOpenMenu" width="138" class="bubble-menu" height="136" viewBox="0 0 138 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_15_213)">
                <rect x="60.2188" y="0.393921" width="90.6678" height="26.2498" transform="rotate(36 60.2188 0.393921)" fill="white"/>
                </g>
                <path d="M65.6494 29.5832C64.6031 28.823 63.8066 27.923 63.2601 26.8832C62.7322 25.8404 62.5258 24.7181 62.6409 23.5162C62.756 22.3143 63.2564 21.1039 64.142 19.885C64.816 18.9573 65.5587 18.2526 66.3701 17.7709C67.1816 17.2892 68.0186 16.9991 68.8812 16.9007C69.7546 16.8101 70.6173 16.893 71.4693 17.1494C72.3321 17.4137 73.1464 17.824 73.9123 18.3805C74.5271 18.8272 75.0425 19.3087 75.4584 19.8251C75.8743 20.3416 76.2186 20.8884 76.4914 21.4657L75.1102 23.5029L74.9484 23.3853L75.0798 21.5031C75.1208 21.2198 75.1354 20.9502 75.1235 20.6943C75.1195 20.4277 75.0517 20.1807 74.9203 19.9533C74.8133 19.7603 74.6907 19.5888 74.5524 19.4389C74.4327 19.286 74.2542 19.1233 74.0169 18.9509C73.3913 18.4964 72.6981 18.2482 71.9374 18.2064C71.1874 18.1725 70.3739 18.4302 69.4968 18.9796C68.6384 19.526 67.7232 20.468 66.7514 21.8056C65.7875 23.1324 65.169 24.2899 64.8959 25.2781C64.6307 26.2556 64.6248 27.0918 64.878 27.7867C65.1499 28.4786 65.5986 29.0519 66.2243 29.5065C66.5695 29.7572 66.8602 29.9355 67.0965 30.0413C67.3406 30.1362 67.6005 30.2096 67.8759 30.2615C68.1436 30.3241 68.3901 30.3137 68.6155 30.2302C68.8488 30.136 69.0791 30.0232 69.3065 29.8917L71.1705 28.8233L71.3323 28.9408L69.6027 31.2194C68.9772 31.1275 68.3292 30.9533 67.6585 30.6968C66.9879 30.4403 66.3182 30.0691 65.6494 29.5832ZM70.7724 32.8603L70.8899 32.6985L71.3237 32.8159C71.613 32.8942 71.8276 32.8936 71.9678 32.8141C72.1266 32.7317 72.2843 32.5826 72.4411 32.3669L78.5775 23.9207C78.7343 23.705 78.8273 23.5089 78.8566 23.3324C78.886 23.156 78.8202 22.9516 78.6593 22.7194L78.4136 22.343L78.5311 22.1812L82.6571 25.1789L82.5395 25.3407L82.1543 25.2586C81.8944 25.1852 81.6758 25.1912 81.4985 25.2765C81.3289 25.3511 81.1657 25.4963 81.009 25.712L74.3083 34.9348L76.8 36.7452C77.1991 37.0352 77.5609 37.1497 77.8854 37.0888C78.2206 37.0357 78.6077 36.8884 79.0468 36.6471L80.6653 35.7464L80.8271 35.864L78.636 38.5735L70.7724 32.8603ZM84.8701 43.5479C84.2121 43.0698 83.6619 42.4888 83.2195 41.8047C82.7878 41.1285 82.4978 40.3822 82.3494 39.5657C82.2196 38.7462 82.2692 37.884 82.4981 36.9791C82.7271 36.0742 83.1825 35.1525 83.8643 34.2141C84.5383 33.2864 85.2702 32.5739 86.0601 32.0765C86.85 31.5791 87.6561 31.2748 88.4785 31.1637C89.3088 31.0417 90.1121 31.0815 90.8886 31.2831C91.6837 31.4817 92.4049 31.8161 93.0521 32.2863C93.7101 32.7644 94.2549 33.3415 94.6866 34.0177C95.1368 34.691 95.4269 35.4373 95.5566 36.2568C95.7051 37.0733 95.6609 37.9394 95.4241 38.8551C95.1951 39.76 94.7397 40.6817 94.0579 41.6202C93.3917 42.537 92.6598 43.2496 91.8621 43.7577C91.0722 44.2551 90.2622 44.5648 89.4319 44.6867C88.6203 44.8057 87.8169 44.7659 87.0218 44.5673C86.2454 44.3657 85.5281 44.0259 84.8701 43.5479ZM85.117 43.2081C85.7103 43.6391 86.3039 43.8315 86.8979 43.7851C87.4998 43.728 88.1599 43.3752 88.8781 42.7269C89.615 42.0757 90.4732 41.0758 91.4529 39.7275C92.4403 38.3683 93.126 37.2431 93.5099 36.3519C93.9123 35.4577 94.0438 34.7209 93.9043 34.1416C93.7727 33.5516 93.4102 33.041 92.817 32.61C92.2345 32.1868 91.6423 32.0037 91.0404 32.0609C90.4464 32.1072 89.7809 32.456 89.0441 33.1073C88.3258 33.7556 87.473 34.7593 86.4855 36.1185C85.5059 37.4668 84.8148 38.5881 84.4123 39.4823C84.0285 40.3736 83.9024 41.1143 84.034 41.7043C84.1735 42.2836 84.5345 42.7849 85.117 43.2081ZM94.8521 50.8002C94.2588 50.3692 93.7096 49.8548 93.2045 49.2571C92.6915 48.6701 92.3163 48.1091 92.0788 47.574L93.7585 45.4322L93.9203 45.5498L93.6578 46.9659C93.5893 47.3777 93.5552 47.7649 93.5554 48.1276C93.5634 48.4795 93.6714 48.8299 93.8794 49.1788C94.0168 49.4434 94.1668 49.6678 94.3297 49.852C94.5111 50.0333 94.7259 50.2141 94.974 50.3943C95.632 50.8724 96.2791 51.0706 96.9152 50.9889C97.5622 50.9151 98.0894 50.5977 98.4969 50.0368C98.881 49.5082 99.0493 49.0043 99.0021 48.525C98.9626 48.0348 98.7589 47.4419 98.391 46.746L97.9392 45.9728C97.3093 44.8889 96.9221 43.8907 96.7776 42.9781C96.6517 42.0626 96.91 41.1625 97.5527 40.278C98.0151 39.6416 98.5766 39.209 99.2372 38.9803C99.9086 38.7594 100.626 38.7365 101.388 38.9116C102.162 39.0946 102.942 39.4721 103.73 40.0442C104.302 40.4596 104.786 40.9269 105.183 41.4463C105.591 41.9735 105.89 42.5037 106.08 43.0369L104.572 44.908L104.41 44.7904L104.628 43.0949C104.719 42.5841 104.728 42.1866 104.654 41.9024C104.588 41.6073 104.46 41.3413 104.27 41.1041C104.161 40.9591 104.051 40.8381 103.94 40.7411C103.837 40.6333 103.694 40.5128 103.511 40.3796C102.961 39.9799 102.379 39.8047 101.767 39.854C101.162 39.8925 100.664 40.1814 100.272 40.7208C99.872 41.2709 99.6963 41.819 99.7446 42.365C99.8007 42.9002 100.015 43.501 100.388 44.1674L100.897 45.0318C101.604 46.2372 101.995 47.2634 102.072 48.1103C102.157 48.9464 101.905 49.769 101.317 50.578C100.628 51.5273 99.7022 52.0414 98.5406 52.1204C97.3976 52.1964 96.1681 51.7563 94.8521 50.8002ZM100.688 54.595L100.805 54.4332L101.283 54.558C101.521 54.6157 101.716 54.6087 101.867 54.5371C102.036 54.4625 102.2 54.3173 102.356 54.1016L108.493 45.6555C108.65 45.4397 108.739 45.249 108.76 45.0833C108.8 44.9147 108.745 44.7182 108.595 44.4938L108.329 44.0778L108.446 43.916L116.197 49.547L114.484 52.1093L114.322 51.9917L114.731 49.9653C114.775 49.7006 114.786 49.4697 114.764 49.2727C114.743 49.0756 114.624 48.8988 114.408 48.742L111.496 46.626L108.099 51.3021L109.83 52.56C110.046 52.7167 110.247 52.7803 110.433 52.7508C110.638 52.7184 110.854 52.6364 111.081 52.505L111.875 52.0929L112.037 52.2104L109.921 55.1229L109.759 55.0053L109.929 54.0906C109.973 53.8259 109.98 53.6005 109.951 53.4142C109.929 53.2172 109.81 53.0403 109.595 52.8836L107.863 51.6257L104.207 56.6578L107.476 59.0325C107.692 59.1892 107.898 59.2567 108.095 59.2351C108.3 59.2026 108.514 59.1114 108.739 58.9613L110.507 57.9223L110.669 58.0399L108.762 60.4611L100.688 54.595Z" fill="#787878"/>
                <g filter="url(#filter1_d_15_213)">
                <path d="M116.614 69.2368C103.799 83.6164 95.6623 89.1135 79 93.1159" stroke="#E4C6BF" stroke-width="3" stroke-linecap="round"/>
                </g>
                <g filter="url(#filter2_d_15_213)">
                <path d="M32.1537 62.1828C35.4013 43.1974 39.3884 34.2239 51.398 22" stroke="#E4C6BF" stroke-width="3" stroke-linecap="round"/>
                </g>
                <g filter="url(#filter3_d_15_213)">
                <circle cx="54.0024" cy="82.4428" r="40" transform="rotate(25 54.0024 82.4428)" fill="#E4C6BF"/>
                </g>
                <circle cx="58.5509" cy="96.6828" r="1.98347" transform="rotate(25 58.5509 96.6828)" fill="#676767"/>
                <circle cx="39.3761" cy="87.7415" r="1.98347" transform="rotate(25 39.3761 87.7415)" fill="#676767"/>
                <circle cx="35.1457" cy="55.4441" r="2.5" transform="rotate(25 35.1457 55.4441)" fill="white"/>
                <path d="M39.2583 94.252C43.4342 100.941 49.3989 100.926 52.7406 100.539" stroke="#676767" stroke-width="1.32231" stroke-linecap="round"/>
                <path d="M57.9793 47.8859C50.5206 47.1432 46.7236 48.0277 40.6422 51.9386" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <defs>
                <filter id="filter0_d_15_213" x="40.7896" y="0.393921" width="96.781" height="82.5297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_213"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_213" result="shape"/>
                </filter>
                <filter id="filter1_d_15_213" x="73.4995" y="67.7368" width="48.6143" height="34.8794" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_213"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_213" result="shape"/>
                </filter>
                <filter id="filter2_d_15_213" x="26.6536" y="20.5" width="30.2444" height="51.183" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_213"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_213" result="shape"/>
                </filter>
                <filter id="filter3_d_15_213" x="8.70366" y="39.7887" width="90.5976" height="90.5976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="1.32231" operator="erode" in="SourceAlpha" result="effect1_dropShadow_15_213"/>
                <feOffset dy="2.64463"/>
                <feGaussianBlur stdDeviation="3.30579"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_213"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_213" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg v-else class="bubble-menu" width="138" height="136" viewBox="0 0 138 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_15_212)">
                <rect x="60.2188" y="0.393921" width="90.6678" height="26.2498" transform="rotate(36 60.2188 0.393921)" fill="white"/>
                </g>
                <path d="M64.9237 28.064L65.0413 27.9022L65.4472 28.024C65.9001 28.1718 66.3069 27.9977 66.6674 27.5015L72.6863 19.2171C72.843 19.0014 72.9415 18.8092 72.9816 18.6406C73.0325 18.4798 72.9868 18.2818 72.8445 18.0466L72.5649 17.5468L72.6825 17.385L75.8053 19.6538L73.1089 29.6599L81.614 23.8741L84.8016 26.19L84.684 26.3518L84.3546 26.2608C84.0948 26.1874 83.8762 26.1934 83.6988 26.2787C83.5292 26.3533 83.3661 26.4985 83.2093 26.7142L77.0611 35.1765C76.9044 35.3923 76.8099 35.5791 76.7776 35.7369C76.7453 35.8948 76.8003 36.0913 76.9425 36.3265L77.1604 36.7072L77.0428 36.869L73.0139 33.9418L73.1314 33.78L73.577 33.8813C73.8447 33.9439 74.0486 33.9355 74.1887 33.856C74.3289 33.7765 74.4773 33.6289 74.6341 33.4132L77.2791 29.7726L80.6736 25.1685L70.4736 32.0962L69.6646 31.5084L72.8733 19.6743L69.9946 23.7385L67.0322 27.816C66.8598 28.0533 66.7511 28.2709 66.7061 28.469C66.6797 28.6641 66.7455 28.8684 66.9034 29.0821L67.1771 29.4539L67.0595 29.6157L64.9237 28.064ZM78.4831 37.9155L78.6007 37.7537L79.0786 37.8784C79.3168 37.9361 79.5114 37.9292 79.6624 37.8575C79.8319 37.783 79.9951 37.6378 80.1518 37.4221L86.2883 28.9759C86.445 28.7602 86.5341 28.5695 86.5556 28.4038C86.5957 28.2352 86.5407 28.0387 86.3907 27.8142L86.1243 27.3982L86.2419 27.2364L93.9922 32.8674L92.279 35.4297L92.1171 35.3122L92.5264 33.2857C92.5704 33.021 92.5816 32.7902 92.5599 32.5931C92.5383 32.3961 92.4196 32.2192 92.2038 32.0625L89.2914 29.9464L85.894 34.6226L87.6253 35.8804C87.841 36.0372 88.042 36.1008 88.2282 36.0713C88.4331 36.0388 88.6492 35.9569 88.8766 35.8254L89.6704 35.4133L89.8322 35.5309L87.7162 38.4433L87.5544 38.3258L87.7245 37.4111C87.7685 37.1464 87.7757 36.9209 87.7462 36.7347C87.7246 36.5377 87.6059 36.3608 87.3901 36.204L85.6588 34.9462L82.0028 39.9783L85.2712 42.3529C85.487 42.5097 85.6934 42.5772 85.8904 42.5555C86.0953 42.5231 86.3099 42.4318 86.5343 42.2817L88.3027 41.2428L88.4645 41.3603L86.5571 43.7816L78.4831 37.9155ZM88.3966 45.118L88.5141 44.9562L89.1657 45.1824C89.399 45.2695 89.6137 45.2689 89.8097 45.1806C90.0136 45.0815 90.1939 44.9241 90.3506 44.7083L96.0051 36.9256C96.0745 36.5805 96.1185 36.3158 96.137 36.1315C96.1664 35.955 96.1692 35.7923 96.1456 35.6433C96.1299 35.4835 96.0974 35.2787 96.0483 35.0287L95.9731 34.5538L96.0906 34.392L98.9546 36.4727L99.0011 47.7053L103.433 41.6053C103.59 41.3896 103.693 41.168 103.743 40.9406C103.804 40.7209 103.746 40.5058 103.569 40.2951L103.141 39.7616L103.259 39.5998L105.572 41.2808L105.455 41.4426L104.912 41.2708C104.671 41.1945 104.47 41.2216 104.309 41.352C104.149 41.4825 103.99 41.6556 103.833 41.8713L96.9207 51.3853L96.0146 50.727L96.0055 37.7417L90.7389 44.9905C90.5822 45.2062 90.4813 45.4131 90.4363 45.6111C90.3913 45.8092 90.4478 46.015 90.6057 46.2286L90.9736 46.7431L90.856 46.9049L88.3966 45.118ZM104.245 57.0775C103.425 56.4818 102.803 55.8072 102.378 55.0536C101.964 54.3078 101.806 53.4927 101.905 52.6085C102.022 51.7213 102.457 50.7599 103.209 49.7243L107.265 44.1421C107.563 43.7322 107.548 43.3097 107.222 42.8746L106.936 42.5189L107.054 42.3571L111.536 45.6134L111.418 45.7753L110.855 45.5638C110.385 45.3709 109.99 45.4956 109.668 45.9378L105.331 51.9084C104.602 52.9116 104.271 53.8087 104.339 54.5997C104.415 55.38 104.847 56.0562 105.634 56.6283C106.454 57.2239 107.285 57.4407 108.128 57.2785C108.982 57.1242 109.746 56.5832 110.42 55.6555L114.734 49.7174C114.891 49.5016 114.99 49.2854 115.033 49.0688C115.093 48.8491 115.035 48.634 114.859 48.4233L114.525 48.0323L114.642 47.8705L116.908 49.5163L116.79 49.6781L116.271 49.474C116.035 49.3682 115.825 49.3728 115.643 49.4875C115.461 49.6023 115.291 49.7676 115.134 49.9833L110.832 55.9053C110.26 56.6928 109.602 57.2695 108.858 57.6355C108.122 57.9907 107.356 58.1263 106.56 58.0424C105.772 57.9477 105 57.6261 104.245 57.0775Z" fill="#787878"/>
                <g filter="url(#filter1_d_15_212)">
                <path d="M116.614 69.2368C103.799 83.6164 95.6623 89.1135 79 93.1159" stroke="#E4C6BF" stroke-width="3" stroke-linecap="round"/>
                </g>
                <g filter="url(#filter2_d_15_212)">
                <path d="M32.1537 62.1828C35.4013 43.1974 39.3884 34.2239 51.398 22" stroke="#E4C6BF" stroke-width="3" stroke-linecap="round"/>
                </g>
                <g filter="url(#filter3_d_15_212)">
                <circle cx="54.0024" cy="82.4428" r="40" transform="rotate(25 54.0024 82.4428)" fill="#E4C6BF"/>
                </g>
                <circle cx="58.5509" cy="96.6828" r="1.98347" transform="rotate(25 58.5509 96.6828)" fill="#676767"/>
                <circle cx="39.3761" cy="87.7415" r="1.98347" transform="rotate(25 39.3761 87.7415)" fill="#676767"/>
                <circle cx="35.1457" cy="55.4441" r="2.5" transform="rotate(25 35.1457 55.4441)" fill="white"/>
                <path d="M39.2583 94.252C43.4342 100.941 49.3989 100.926 52.7406 100.539" stroke="#676767" stroke-width="1.32231" stroke-linecap="round"/>
                <path d="M57.9793 47.8859C50.5206 47.1431 46.7236 48.0277 40.6422 51.9386" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <defs>
                <filter id="filter0_d_15_212" x="40.7896" y="0.393921" width="96.781" height="82.5297" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_212"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_212" result="shape"/>
                </filter>
                <filter id="filter1_d_15_212" x="73.4995" y="67.7368" width="48.6143" height="34.8794" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_212"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_212" result="shape"/>
                </filter>
                <filter id="filter2_d_15_212" x="26.6536" y="20.5" width="30.2444" height="51.1831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_212"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_212" result="shape"/>
                </filter>
                <filter id="filter3_d_15_212" x="8.70366" y="39.7887" width="90.5976" height="90.5976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="1.32231" operator="erode" in="SourceAlpha" result="effect1_dropShadow_15_212"/>
                <feOffset dy="2.64463"/>
                <feGaussianBlur stdDeviation="3.30579"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_212"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_212" result="shape"/>
                </filter>
                </defs>
            </svg>
        </button>

    </div>
</template>

<script setup>
    const cursorIsHovering = useCursorIsHovering();
    const  isOpenMenu  = useIsOpenMenu();
</script>

<style scoped>
.bubble-menu {
    transform: scale(0.6) translateX(-40%) translateY(-20%);
    position: absolute;
    top: -180%;
    left: 50%;
    visibility: hidden;
    opacity: 0;
    transition: all 300ms;
}

button:hover > .bubble-menu {
    animation: none;
    visibility: visible;
    opacity: 1;
    transform: scale(0.6) translateX(-55%) translateY(0%);
    transition: all 300ms;
}


</style>