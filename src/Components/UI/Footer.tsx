// components/Footer.tsx

import React, { useState } from "react";
import Link from "next/link";
import Facebook from "../../../public/facebook_hover.svg";
import LinkedIn from "../../../public/linkdin_hover.svg";
import Instagram from "../../../public/instagram_hover.svg";
import Youtube from "../../../public/youtube_hover.svg";
import Twitter from "../../../public/tweet_hover.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  const [HoverEffect, setHoverEffect] = useState<boolean>(false);
  return (
    <>
      <footer className="footer pt-4 bg-base-200 text-base-content bg-gradient-to-r from-black to-teal-800  grid grid-cols-1 lg:pl-24 lg:pr-14 sm:grid-cols-1 py-4 pb-4 lg:grid-cols-2 gap-5">
        <nav className="flex-1 flex-col w-full">
           <Link
            href="#"
            aria-label="Back to homepage"
            className="flex items-center pt-14 pb-4 justify-center md:justify-start"
          >
            {/* Stylized text or logo  */}
            <span className="font-bold text-5xl text-[#16FF00]">Zentra</span>
            <span className="font-light text-4xl text-white ml-1">Wealth</span>
         </Link>
         <nav className="flex space-x-4 mt-4 md:mt-0 md:pr-28">
            <a href="#" aria-label="Twitter">
              <Image src={Facebook} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={LinkedIn} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="Facebook">
              <Image src={Instagram} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={Youtube} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={Twitter} width={60} height={70} alt="" />
            </a>
          </nav>

          {/* <p className="text-white text-center md:text-left mb-4">
            Welcome to India&apos;s largest SEBI <br />
            registered trading & investing
            <br />
            platform. We offer education,
            <br />
            advisory & research services
          </p> */}
          {/* <span className=" flex flex-row md:my-5 mx-10 md:mx-0 mb-5  md:gap-3 bg-white/5 rounded-3xl md:h-20 md:w-2/3"> */}
            {/* <Link
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
             */}
                <path
                  d="M81.837 48.4499C83.815 46.1881 83.815 42.8119 81.837 40.5501L77.9374 36.0912C76.8555 34.8541 76.3284 33.2273 76.4792 31.5908L77.0213 25.7066C77.2975 22.7096 75.3106 19.9718 72.3757 19.3052L66.6387 18.002C65.029 17.6364 63.641 16.6237 62.8016 15.2024L59.792 10.1069C58.2573 7.50841 55.0314 6.45422 52.2584 7.64498L46.8671 9.96007C45.3555 10.6091 43.6438 10.6091 42.1322 9.96006L36.7342 7.6421C33.9641 6.45258 30.7415 7.50326 29.2048 10.0969L26.2031 15.1632C25.3604 16.5857 23.968 17.5973 22.3547 17.9593L16.6391 19.2417C13.6971 19.9018 11.702 22.6427 11.9779 25.6452L12.5215 31.5608C12.6715 33.1932 12.1471 34.8158 11.0701 36.0517L7.14922 40.5511C5.17784 42.8133 5.18082 46.1841 7.15621 48.4428L11.0625 52.9095C12.1441 54.1462 12.6712 55.7723 12.5209 57.4084L11.9766 63.3316C11.7012 66.3281 13.688 69.0651 16.6224 69.7316L22.3654 71.0361C23.9723 71.4011 25.3584 72.411 26.1984 73.8287L29.1981 78.8917C30.7376 81.4903 33.9688 82.5393 36.7412 81.3407L42.1267 79.0122C43.6414 78.3573 45.3589 78.3552 46.8752 79.0063L52.2651 81.3208C55.0352 82.5103 58.2579 81.4597 59.7945 78.866L62.801 73.7916C63.641 72.3739 65.027 71.3641 66.634 70.9991L72.3757 69.6948C75.3106 69.0282 77.2975 66.2904 77.0213 63.2934L76.4792 57.4092C76.3284 55.7727 76.8555 54.1459 77.9374 52.9088L81.837 48.4499Z"
                  fill="url(#paint0_linear_4730_30251)"
                />
                <circle cx="44.4999" cy="44.4999" r="26.9853" stroke="black" />
                <circle cx="44.4996" cy="44.5001" r="13.8971" stroke="black" />
                <g clip-path="url(#clip0_4730_30251)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.1302 50.4437H45.987V48.2112H47.0984C47.4081 48.2112 47.6904 48.3543 47.8499 48.5212C47.9455 48.6214 48.0093 48.7073 48.0685 48.8409C48.3053 49.399 48.0685 50.0478 47.5538 50.3197C47.4536 50.3722 47.2669 50.4437 47.1302 50.4437ZM46.9572 46.7276H45.987V44.9101H46.8934C47.1439 44.9101 47.4308 45.0245 47.5857 45.1343C48.1596 45.5445 47.9819 46.3412 47.3215 46.6226C47.235 46.6608 47.071 46.7228 46.9572 46.7228V46.7276ZM37.3196 43.498C37.3196 44.4473 37.8844 44.7145 38.6541 44.7145H40.1162V47.7961C40.6354 47.7961 42.8626 47.8295 43.227 47.758C43.3454 47.7341 43.4957 47.6626 43.564 47.5958C43.7416 47.4193 43.8236 47.1903 43.8236 46.8325V45.7306H42.439V46.3459H41.6738V44.9482H44.6024V50.4294H39.1779C39.1278 50.4294 38.7635 50.0191 38.7042 49.9571C38.5357 49.7806 38.308 49.523 38.1258 49.3656C38.0803 49.3274 38.0484 49.2893 38.0028 49.2416C37.9254 49.1605 37.3697 48.5499 37.2969 48.5308C37.2969 48.6167 37.3151 48.6214 37.3151 48.7121V51.6936H47.3671C47.8271 51.6936 48.2825 51.5552 48.6287 51.3167C48.6925 51.2738 48.7289 51.2451 48.7881 51.1974C49.0796 50.9494 49.2117 50.792 49.4166 50.4199C49.6808 49.9333 49.6899 49.7234 49.6899 49.1939C49.6899 48.7645 49.4986 48.2732 49.2527 47.9393C49.075 47.7007 48.82 47.5147 48.5604 47.3811C48.5103 47.3573 48.4693 47.3382 48.4192 47.3143C48.3509 47.2857 48.3144 47.3 48.3099 47.2142C48.4146 47.1903 48.6014 47.0424 48.6833 46.9756C49.0249 46.699 49.2481 46.1551 49.2481 45.6495C49.2481 45.1438 49.2253 44.9339 48.9931 44.5141C48.7198 44.018 48.2917 43.6602 47.7679 43.4646C47.531 43.374 47.1621 43.2643 46.8433 43.2643H41.6738V42.0335H42.439V42.6346H43.8236V41.4515C43.8236 41.1605 43.5959 40.922 43.4228 40.8027C43.2224 40.6692 42.9218 40.5833 42.5984 40.5833H40.0706V43.25H38.9274V40.0013C38.9274 39.9345 39.6835 39.2047 39.8292 39.0472C39.8748 38.9995 40.1071 38.7372 40.1526 38.7372H49.075C49.1251 38.7372 49.6535 39.3191 49.699 39.3669C49.7446 39.4146 50.3002 39.9679 50.3002 40.0204V41.8522C50.3002 41.919 50.0998 42.0717 50.0588 42.1146L48.9475 43.2833H51.0153C51.284 43.2833 51.2111 43.2356 51.5026 42.9303C51.5436 42.8874 51.6985 42.7538 51.6985 42.7014V37.349C51.6985 37.3108 51.6894 37.3013 51.6529 37.3013H37.3196V43.498Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.2959 50.5296C50.2959 50.6107 49.9771 50.8778 49.886 50.9684C49.7493 51.1115 49.2438 51.622 49.1982 51.6935H51.5712C51.6304 51.6935 51.6805 51.7078 51.6805 51.6458V45.5159H50.2959V50.5296Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.9703 43.7937C51.3529 43.7937 51.6671 44.1181 51.6671 44.5236C51.6671 44.9291 51.3574 45.2534 50.9703 45.2534C50.5831 45.2534 50.2734 44.9291 50.2734 44.5236C50.2734 44.1181 50.5831 43.7937 50.9703 43.7937Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M52.955 29.6747L57.4611 23.8332L58.6836 24.7763L54.1776 30.6177L52.955 29.6747Z"
                  fill="black"
                />
                <path
                  d="M46.2134 27.0284L48.202 19.924L51.3087 20.7936C52.6872 21.1795 53.3206 22.0842 53.0146 23.1771L53.0119 23.187C52.8024 23.9353 52.0628 24.4344 51.3038 24.3388L51.279 24.4274C52.1987 24.7645 52.686 25.6601 52.431 26.5709L52.4282 26.5807C52.0796 27.8263 50.9201 28.3459 49.4037 27.9215L46.2134 27.0284ZM50.6209 21.7904L49.3802 21.4431L48.862 23.2942L49.9796 23.6071C50.7821 23.8317 51.314 23.6196 51.478 23.0337L51.4807 23.0239C51.642 22.4478 51.3298 21.9888 50.6209 21.7904ZM49.8777 24.6351L48.5877 24.274L48.0103 26.3369L49.3347 26.7076C50.1913 26.9474 50.7561 26.7126 50.9449 26.0381L50.9477 26.0283C51.1324 25.3685 50.754 24.8804 49.8777 24.6351Z"
                  fill="black"
                />
                <path
                  d="M39.4599 28.0389L37.8583 20.8374L42.6294 19.7764L42.9058 21.019L39.6419 21.7449L40.0281 23.4817L43.1074 22.7969L43.3648 23.9547L40.2856 24.6395L40.6907 26.4611L43.9546 25.7352L44.231 26.9779L39.4599 28.0389Z"
                  fill="black"
                />
                <path
                  d="M36.5303 30.0469C35.1446 31.1383 33.7471 31.1653 32.8689 30.1909L32.8143 30.1298L33.9831 29.2092L34.0187 29.2462C34.4046 29.6452 35.1054 29.5682 35.7842 29.0336C36.4308 28.5243 36.633 27.8639 36.2819 27.4181L36.2787 27.414C35.9782 27.0325 35.5253 27.0442 34.6894 27.4619L33.9808 27.8182C32.583 28.5223 31.622 28.3681 30.9292 27.4885L30.926 27.4845C30.0782 26.4081 30.442 24.9696 31.7272 23.9573C33.0807 22.8912 34.4391 22.9797 35.2778 23.8876L35.3229 23.9366L34.1823 24.8351L34.1363 24.7932C33.7422 24.4333 33.1128 24.4605 32.5023 24.9413C31.907 25.4167 31.7245 26.003 32.0662 26.4367L32.0693 26.4408C32.3667 26.8183 32.825 26.8218 33.6185 26.4245L34.3311 26.065C35.7553 25.3532 36.6755 25.4225 37.3872 26.3261L37.3904 26.3301C38.2952 27.4788 37.9761 28.9081 36.5303 30.0469Z"
                  fill="black"
                />
                <path
                  d="M64.5152 55.3648C63.9243 56.2382 62.8719 56.3226 61.754 55.5663L61.7476 55.562C60.6233 54.8014 60.3078 53.8102 60.9073 52.9241C61.2317 52.4445 61.731 52.2129 62.2303 52.296L62.2689 52.2389L60.3729 50.9562L61.0003 50.0288L65.8341 53.2989L65.2067 54.2263L64.6636 53.8589L64.6249 53.916C64.8804 54.3527 64.8482 54.8726 64.5152 55.3648ZM63.9593 54.5305C64.2923 54.0382 64.1111 53.4712 63.4696 53.0372L63.4632 53.0329C62.8217 52.5989 62.2194 52.6405 61.8885 53.1296C61.5577 53.6187 61.7474 54.1869 62.3858 54.6187L62.3921 54.623C63.0368 55.0592 63.6284 55.0196 63.9593 54.5305Z"
                  fill="black"
                />
                <path
                  d="M61.4842 59.0735C60.5435 59.9481 59.4016 59.8631 58.48 58.8718L58.4774 58.869C57.5636 57.8861 57.5518 56.7191 58.4532 55.881C59.3547 55.0428 60.4907 55.1385 61.3601 56.0736L61.5977 56.3292L59.4691 58.3082C59.9501 58.8087 60.4966 58.8503 60.9319 58.4456C61.2914 58.1114 61.3132 57.7351 61.2597 57.5649L61.2525 57.5402L62.0163 56.8301L62.0368 56.8634C62.3016 57.3397 62.3885 58.2327 61.4842 59.0735ZM59.0391 56.4829C58.6824 56.8145 58.643 57.3014 58.9997 57.7865L60.3336 56.5463C59.8653 56.144 59.3957 56.1513 59.0391 56.4829Z"
                  fill="black"
                />
                <path
                  d="M56.8168 62.5441L54.5661 58.9723L55.5134 58.3754L55.863 58.9302L55.9214 58.8934C55.7916 58.4358 55.973 58.0043 56.4369 57.712C56.5634 57.6322 56.7087 57.5679 56.8191 57.5346L57.3404 58.3618C57.1772 58.4193 57.0169 58.4886 56.8709 58.5806C56.3324 58.9199 56.1859 59.4428 56.5048 59.9488L57.764 61.9472L56.8168 62.5441Z"
                  fill="black"
                />
                <path
                  d="M53.5348 64.6202C52.3397 65.0914 51.3076 64.5956 50.8112 63.3364L50.8097 63.3328C50.3175 62.0843 50.7324 60.9934 51.8774 60.5419C53.0225 60.0905 54.0454 60.594 54.5137 61.7819L54.6417 62.1065L51.9377 63.1725C52.203 63.814 52.6967 64.0521 53.2496 63.8341C53.7062 63.6541 53.8638 63.3117 53.8761 63.1337L53.8784 63.1081L54.8486 62.7256L54.8556 62.7641C54.9284 63.3042 54.6834 64.1674 53.5348 64.6202ZM52.2033 61.3161C51.7502 61.4947 51.5359 61.9337 51.6911 62.5155L53.3855 61.8475C53.0963 61.302 52.6563 61.1375 52.2033 61.3161Z"
                  fill="black"
                />
                <path
                  d="M49.5091 65.7173C48.5023 65.9235 48.0297 65.6798 47.865 64.876L47.4155 62.6822L46.777 62.8131L46.6076 61.9866L47.2462 61.8558L47.0438 60.8679L48.152 60.6408L48.3544 61.6288L49.2071 61.4541L49.3764 62.2805L48.5237 62.4552L48.9216 64.3973C48.9978 64.7691 49.1894 64.9021 49.5613 64.8259C49.704 64.7967 49.7776 64.7738 49.8805 64.7409L50.0475 65.5561C49.9176 65.6101 49.7194 65.6742 49.5091 65.7173Z"
                  fill="black"
                />
                <path
                  d="M44.626 67.119C43.4805 67.167 42.8077 66.6808 42.697 65.9601L42.6925 65.945L43.792 65.899L43.8003 65.914C43.8993 66.1708 44.1639 66.3478 44.6044 66.3293C45.0335 66.3114 45.317 66.1153 45.3053 65.8356L45.305 65.828C45.2955 65.602 45.121 65.4673 44.6879 65.3894L43.9768 65.2695C43.165 65.1308 42.7501 64.7528 42.7236 64.1207L42.7235 64.1169C42.6903 63.3239 43.3731 62.7657 44.4266 62.7216C45.5338 62.6753 46.1699 63.2013 46.2442 63.8775L46.2449 63.8928L45.2066 63.9362L45.202 63.9172C45.1312 63.6938 44.8734 63.4935 44.4558 63.5109C44.0689 63.5271 43.8006 63.7187 43.8124 64.0022L43.8126 64.0061C43.8221 64.2321 43.9846 64.3558 44.4253 64.4333L45.1327 64.5534C45.983 64.6982 46.3924 65.0341 46.4185 65.6586L46.4187 65.6624C46.4536 66.4976 45.7063 67.0738 44.626 67.119Z"
                  fill="black"
                />
                <path
                  d="M40.7582 62.0851C40.4155 62.0443 40.1626 61.7362 40.2034 61.3935C40.2446 61.047 40.5628 60.8069 40.9055 60.8476C41.2482 60.8884 41.4973 61.1961 41.4561 61.5426C41.4153 61.8853 41.1009 62.1259 40.7582 62.0851ZM39.6231 66.8541L40.1219 62.662L41.2337 62.7943L40.7349 66.9864L39.6231 66.8541Z"
                  fill="black"
                />
                <path
                  d="M35.1798 66.8899C34.0645 66.5382 33.5648 65.866 33.6927 65.1544L33.6985 65.1362L34.7553 65.4694L34.7543 65.4852C34.7391 65.7377 34.9662 65.9862 35.4416 66.1361C36.0121 66.316 36.4291 66.154 36.5767 65.6859L36.8131 64.9363L36.7473 64.9155C36.3904 65.2694 35.8936 65.366 35.3341 65.1896C34.3211 64.8701 33.9425 63.8904 34.3035 62.7457L34.3058 62.7384C34.6794 61.5536 35.5561 60.9535 36.5874 61.2787C37.1396 61.4529 37.4858 61.8596 37.5585 62.381L37.6097 62.3972L37.8173 61.7389L38.8851 62.0757L37.6547 65.9776C37.3572 66.9211 36.3976 67.2739 35.1798 66.8899ZM35.9544 64.4846C36.5322 64.6668 37.0178 64.3254 37.2265 63.6634L37.2288 63.6561C37.4375 62.9942 37.232 62.4349 36.6578 62.2538C36.0837 62.0728 35.6091 62.4177 35.4004 63.0796L35.398 63.0869C35.1893 63.7488 35.3766 64.3024 35.9544 64.4846Z"
                  fill="black"
                />
                <path
                  d="M30.1927 62.9282C29.086 62.2761 28.8417 61.1574 29.5289 59.9913L29.5308 59.988C30.2121 58.8317 31.3274 58.4875 32.3878 59.1124C33.4482 59.7372 33.6807 60.8533 33.0325 61.9534L32.8553 62.2541L30.3512 60.7785C30.0088 61.3823 30.1248 61.918 30.6369 62.2197C31.0597 62.4689 31.4267 62.3825 31.5745 62.2826L31.5961 62.2687L32.4947 62.7981L32.4686 62.8273C32.0876 63.217 31.2564 63.555 30.1927 62.9282ZM31.978 59.8456C31.5584 59.5983 31.0805 59.6995 30.7174 60.1798L32.2866 61.1044C32.5386 60.5408 32.3976 60.0928 31.978 59.8456Z"
                  fill="black"
                />
                <path
                  d="M24.6699 57.2302L28.639 53.3751L30.2446 55.0282C31.1209 55.9304 31.1418 56.915 30.3606 57.6738L30.3551 57.6791C29.8463 58.1733 29.1525 58.3341 28.5329 58.0539L27.7689 60.4208L26.8552 59.4801L27.5889 57.3297L26.929 56.6503L25.4767 58.0608L24.6699 57.2302ZM27.5342 56.0625L28.2448 56.7942C28.6482 57.2095 29.1225 57.2246 29.5131 56.8452L29.5186 56.8399C29.901 56.4685 29.9001 55.9723 29.4966 55.5569L28.7967 54.8363L27.5342 56.0625Z"
                  fill="black"
                />
                <g clip-path="url(#clip1_4730_30251)">
                  <path
                    d="M25.6242 35.7835C25.4487 35.428 24.9415 35.428 24.766 35.7835L23.9301 37.4772L22.061 37.7487C21.6686 37.8054 21.5116 38.2882 21.7959 38.565L23.1482 39.8833L22.8292 41.7443C22.7618 42.1357 23.1723 42.4338 23.5232 42.2491L25.1949 41.37L26.8666 42.2491C27.2175 42.4334 27.628 42.1357 27.561 41.7447L27.242 39.8833L28.5943 38.5647C28.8779 38.2882 28.7216 37.8058 28.3288 37.7487L26.4604 37.4772L25.6238 35.7835H25.6242ZM21.3538 36.0242C21.3098 36.0793 21.2895 36.1496 21.2974 36.2197C21.3052 36.2897 21.3406 36.3538 21.3957 36.3978L22.2818 37.1067C22.309 37.1293 22.3404 37.1463 22.3742 37.1566C22.408 37.1669 22.4435 37.1704 22.4787 37.1668C22.5138 37.1632 22.5479 37.1527 22.5789 37.1358C22.61 37.1189 22.6373 37.096 22.6594 37.0684C22.6815 37.0408 22.6978 37.0091 22.7075 36.9751C22.7172 36.9412 22.72 36.9056 22.7158 36.8705C22.7115 36.8354 22.7004 36.8015 22.6829 36.7708C22.6654 36.7401 22.642 36.7132 22.614 36.6917L21.7278 35.9827C21.7005 35.9609 21.6692 35.9446 21.6357 35.9348C21.6021 35.9251 21.567 35.9221 21.5322 35.9259C21.4975 35.9298 21.4639 35.9404 21.4332 35.9573C21.4026 35.9742 21.3757 35.9969 21.3538 36.0242ZM29.036 41.1417C29.08 41.0867 29.1004 41.0164 29.0926 40.9463C29.0848 40.8763 29.0495 40.8121 28.9945 40.7681L28.1083 40.0592C28.0533 40.0151 27.983 39.9946 27.9129 40.0024C27.8428 40.0101 27.7786 40.0454 27.7345 40.1004C27.6904 40.1555 27.67 40.2258 27.6778 40.2959C27.6855 40.366 27.7208 40.4301 27.7758 40.4742L28.662 41.1832C28.6893 41.205 28.7206 41.2213 28.7541 41.2311C28.7877 41.2408 28.8229 41.2438 28.8576 41.24C28.8923 41.2361 28.926 41.2255 28.9566 41.2086C28.9872 41.1917 29.0142 41.169 29.036 41.1417ZM21.3957 40.7681C21.3677 40.7897 21.3443 40.8166 21.3268 40.8473C21.3093 40.878 21.2981 40.9119 21.2939 40.9469C21.2897 40.982 21.2925 41.0176 21.3022 41.0516C21.3118 41.0856 21.3282 41.1173 21.3503 41.1449C21.3723 41.1724 21.3997 41.1954 21.4307 41.2122C21.4618 41.2291 21.4958 41.2397 21.531 41.2432C21.5661 41.2468 21.6017 41.2433 21.6354 41.233C21.6692 41.2227 21.7006 41.2058 21.7278 41.1832L22.614 40.4742C22.6675 40.4297 22.7015 40.366 22.7085 40.2967C22.7156 40.2274 22.6951 40.1581 22.6516 40.1037C22.6081 40.0493 22.545 40.0142 22.4758 40.0059C22.4067 39.9975 22.337 40.0167 22.2818 40.0592L21.3957 40.7681ZM29.036 36.0238C29.08 36.0789 29.1004 36.1492 29.0926 36.2192C29.0848 36.2893 29.0495 36.3534 28.9945 36.3974L28.1083 37.1064C28.0811 37.1282 28.0498 37.1445 28.0162 37.1542C27.9827 37.164 27.9476 37.167 27.9129 37.1632C27.8782 37.1593 27.8445 37.1487 27.8139 37.1319C27.7833 37.115 27.7564 37.0924 27.7345 37.0651C27.7127 37.0378 27.6964 37.0066 27.6867 36.973C27.677 36.9395 27.6739 36.9044 27.6778 36.8696C27.6816 36.8349 27.6922 36.8013 27.7091 36.7707C27.7259 36.7401 27.7486 36.7131 27.7758 36.6913L28.662 35.9824C28.6893 35.9605 28.7206 35.9442 28.7541 35.9345C28.7877 35.9247 28.8229 35.9217 28.8576 35.9256C28.8923 35.9294 28.926 35.9401 28.9566 35.9569C28.9872 35.9738 29.0142 35.9965 29.036 36.0238Z"
                    fill="black"
                  />
                </g>
                <g clip-path="url(#clip2_4730_30251)">
                  <path
                    d="M64.2345 35.7833C64.0591 35.4277 63.5518 35.4277 63.3763 35.7833L62.5405 37.4769L60.6714 37.7485C60.279 37.8052 60.1219 38.288 60.4062 38.5648L61.7585 39.8831L61.4395 41.7441C61.3722 42.1354 61.7826 42.4335 62.1336 42.2488L63.8053 41.3697L65.477 42.2488C65.8279 42.4332 66.2384 42.1354 66.1714 41.7444L65.8523 39.8831L67.2047 38.5644C67.4882 38.288 67.3319 37.8055 66.9392 37.7485L65.0707 37.4769L64.2342 35.7833H64.2345ZM59.9642 36.0239C59.9202 36.079 59.8999 36.1493 59.9077 36.2194C59.9156 36.2895 59.9509 36.3536 60.006 36.3976L60.8922 37.1065C60.9194 37.1291 60.9508 37.146 60.9846 37.1563C61.0184 37.1667 61.0539 37.1701 61.089 37.1666C61.1242 37.163 61.1583 37.1525 61.1893 37.1356C61.2203 37.1187 61.2477 37.0958 61.2697 37.0682C61.2918 37.0406 61.3082 37.0089 61.3178 36.9749C61.3275 36.9409 61.3303 36.9053 61.3261 36.8703C61.3219 36.8352 61.3107 36.8013 61.2932 36.7706C61.2758 36.7399 61.2523 36.713 61.2243 36.6914L60.3382 35.9825C60.3109 35.9606 60.2796 35.9443 60.246 35.9346C60.2125 35.9249 60.1773 35.9218 60.1426 35.9257C60.1078 35.9295 60.0742 35.9402 60.0436 35.957C60.013 35.9739 59.986 35.9966 59.9642 36.0239ZM67.6463 41.1415C67.6904 41.0864 67.7107 41.0161 67.703 40.9461C67.6952 40.876 67.6599 40.8119 67.6049 40.7679L66.7187 40.0589C66.6636 40.0148 66.5933 39.9944 66.5232 40.0021C66.4531 40.0099 66.389 40.0452 66.3449 40.1002C66.3008 40.1552 66.2804 40.2256 66.2881 40.2957C66.2959 40.3658 66.3311 40.4299 66.3862 40.474L67.2724 41.1829C67.2996 41.2048 67.3309 41.2211 67.3645 41.2308C67.3981 41.2406 67.4332 41.2436 67.4679 41.2397C67.5027 41.2359 67.5363 41.2252 67.5669 41.2084C67.5975 41.1915 67.6245 41.1688 67.6463 41.1415ZM60.006 40.7679C59.978 40.7894 59.9546 40.8163 59.9371 40.847C59.9197 40.8777 59.9085 40.9116 59.9043 40.9467C59.9 40.9818 59.9028 41.0174 59.9125 41.0513C59.9222 41.0853 59.9385 41.117 59.9606 41.1446C59.9827 41.1722 60.01 41.1951 60.0411 41.212C60.0721 41.2289 60.1062 41.2394 60.1413 41.243C60.1765 41.2466 60.212 41.2431 60.2458 41.2328C60.2796 41.2225 60.311 41.2055 60.3382 41.1829L61.2243 40.474C61.2779 40.4295 61.3118 40.3657 61.3189 40.2964C61.3259 40.2271 61.3055 40.1578 61.262 40.1035C61.2184 40.0491 61.1553 40.014 61.0862 40.0056C61.017 39.9973 60.9474 40.0164 60.8922 40.0589L60.006 40.7679ZM67.6463 36.0236C67.6904 36.0786 67.7107 36.1489 67.703 36.219C67.6952 36.289 67.6599 36.3531 67.6049 36.3972L66.7187 37.1061C66.6914 37.128 66.6601 37.1442 66.6266 37.154C66.5931 37.1637 66.5579 37.1667 66.5232 37.1629C66.4885 37.1591 66.4549 37.1484 66.4243 37.1316C66.3937 37.1148 66.3667 37.0921 66.3449 37.0649C66.3231 37.0376 66.3068 37.0063 66.2971 36.9728C66.2873 36.9392 66.2843 36.9041 66.2881 36.8694C66.292 36.8347 66.3026 36.8011 66.3194 36.7705C66.3362 36.7399 66.3589 36.7129 66.3862 36.6911L67.2724 35.9821C67.2996 35.9603 67.3309 35.944 67.3645 35.9342C67.3981 35.9245 67.4332 35.9215 67.4679 35.9253C67.5027 35.9292 67.5363 35.9398 67.5669 35.9567C67.5975 35.9736 67.6245 35.9963 67.6463 36.0236Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_4730_30251"
                    x1="44.4997"
                    y1="5.5625"
                    x2="44.4997"
                    y2="83.4375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#29E337" />
                    <stop offset="1" stop-color="#76FF80" />
                  </linearGradient>
                  <clipPath id="clip0_4730_30251">
                    <rect
                      width="14.3971"
                      height="14.3971"
                      fill="white"
                      transform="translate(37.3018 37.3013)"
                    />
                  </clipPath>
                  <clipPath id="clip1_4730_30251">
                    <rect
                      width="8.50735"
                      height="8.50735"
                      fill="white"
                      transform="translate(20.9414 34.6838)"
                    />
                  </clipPath>
                  <clipPath id="clip2_4730_30251">
                    <rect
                      width="8.50735"
                      height="8.50735"
                      fill="white"
                      transform="translate(59.5518 34.6836)"
                    />
                  </clipPath>
                </defs>
              
            {/* </Link> */}
            {/* <span className=" flex flex-col justify-center">
              <p className=" text-white">SEBI Registered Research Analyst</p>
              {/* <p className=' text-white font-bold'> INHOOOO13925</p> */}
            {/* </span>  */}
          {/* </span> */}
          {/* <span className="mb-4 flex flex-col gap-2 justify-center md:justify-start md:items-start items-center md:mx-0 mx-10 bg-white/5 p-3 rounded-xl md:w-2/3">
            <p className=" text-white">Compliance Info</p>
            <p className=" text-white/40">
              Compilance Officer: <span className=" text-white">Pandian</span>
            </p>
            <p className=" text-white/40">
              Number: <span className=" text-white">+91 9856874545</span>
            </p>
            <p className=" text-white/40">
              Email:{" "}
              <span className=" text-white">Zentra0101@gmail.com</span>
            </p>
          </span> */}
        </nav>
        <nav className="flex-1 flex-col w-full">
          
          <span className=" flex flex-col md:gap-6">
            <h6 className="footer-title mb-4 text-white font-bold text-lg">
              Quik Links
            </h6>
            <a  className="text-white hover:text-white/50 ">About us</a>
            {/* <a className="link link-hover mb-2 text-white/50">Memership</a> */}
            <a  className="text-white hover:text-white/50 ">Features</a>
            {/* <a className="link link-hover text-white/50">FAQs</a> */}
            <a  className="text-white hover:text-white/50 ">Contact Us</a>
            {/* <a className="link link-hover text-white/50">Invester Charter</a>
            <a className="link link-hover text-white/50">Complaints</a> */}
          </span>
        </nav>
        {/* <nav className="flex-1 flex-col w-full"> */}
          {/* <h6 className="footer-title mb-4 text-white font-bold text-lg">
            Contact
          </h6> */}
          
          {/* <span className=" flex flex-col md:gap-6">
            <h6 className="footer-title mb-4 text-white font-bold text-lg">
              Company
            </h6>
          <Link className="text-white hover:text-white/50 " href="/terms">Terms & Conditions</Link>
          <Link className="text-white hover:text-white/50" href="/privacy">Privacy Policy</Link>
          <Link className="text-white hover:text-white/50" href='/cookie'>Cookie Policy</Link>
          </span> */}
        {/* </nav> */}
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 bg-gradient-to-r from-black to-teal-700 border-t px-10 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* <nav className="flex space-x-4 mt-4 md:mt-0 md:pr-28">
            <a href="#" aria-label="Twitter">
              <Image src={Facebook} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={LinkedIn} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="Facebook">
              <Image src={Instagram} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={Youtube} width={60} height={70} alt="" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={Twitter} width={60} height={70} alt="" />
            </a> 
          </nav>*/}
          <span className="flex flex-col md:gap-6">
  
  <div className="flex flex-col md:flex-row md:gap-6">
    <Link className="text-white hover:text-white/50" href="/terms">Terms & Conditions</Link>
    <Link className="text-white hover:text-white/50" href="/privacy">Privacy Policy</Link>
    <Link className="text-white hover:text-white/50" href='/cookie'>Cookie Policy</Link>
  </div>
</span>

<aside className="flex items-center mb-4 md:mb-0 md:ml-[80px]">
            <p className="text-center md:text-left md:text-base text-xs text-white/50">
              Copyright ©2024 Zentra Wealth. All rights reserved.
            </p>
          </aside>

        </div>
      </footer>
    </>
  );
};

export default Footer;
