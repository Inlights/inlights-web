/** @jsx jsx */
import { jsx } from "theme-ui";

const SVG = ({ height = "100%", viewBox = "0 0 202 49" }) => (
  <svg
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M0 37.2609V3.06189h5.85892V37.2609H0z"
      fill="url(#paint0_radial)"
    />
    <path
      d="M13.3632 37.2608V10.4915h5.7237v5.1783c2.3435-3.8049 6.7377-6.14636 12.2136-6.14636 8.1574 0 12.2136 5.22326 12.2136 12.45036v15.287H37.858V22.3565c0-5.2683-2.6816-8.1051-8.0223-8.1051-4.597 0-8.4503 2.1388-10.7488 6.5516v16.4578h-5.7237z"
      fill="url(#paint1_radial)"
    />
    <path
      d="M50.4095 37.2609V1.10315h5.6786V37.2609h-5.6786z"
      fill="url(#paint2_radial)"
    />
    <path
      d="M68.7295 37.2609h-5.6787V10.4916h5.6787v26.7693z"
      fill="url(#paint3_radial)"
    />
    <path
      d="M106.407 33.7936C106.407 44.0601 98.4752 48 90.0248 48c-4.7998 0-10.4108-1.3733-13.4529-3.4221l2.0506-4.2552c2.5464 1.6661 6.2645 2.9269 10.8165 2.9269 7.2785 0 11.245-2.8368 11.245-8.6455v-2.499c-2.5017 3.5572-7.279 5.7185-12.3718 5.7185-8.8559 0-14.467-5.5159-14.467-14.1163 0-8.6455 5.6336-14.20645 14.467-14.20645 5.4759 0 9.8701 2.13885 12.3718 5.76365v-4.773h5.723v23.3021zm-5.723-13.8237c-2.6369-4.1426-6.3551-5.7636-10.862-5.7636-6.6476 0-10.3657 3.4672-10.3657 9.5235 0 6.0113 3.7181 9.4784 10.3657 9.4784 4.5069 0 8.2251-1.621 10.862-5.7636"
      fill="url(#paint4_radial)"
    />
    <path
      d="M142.101 21.9738v15.2871h-5.678V22.3565c0-5.2683-2.682-8.1051-8.022-8.1051-4.597 0-8.451 2.1389-10.749 6.5516v16.4579h-5.724V1.10315h5.724V15.6473c2.343-3.8049 6.737-6.14637 12.213-6.14637 8.18 0 12.236 5.22327 12.236 12.47287z"
      fill="url(#paint5_radial)"
    />
    <path
      d="M167.903 35.73c-2.208 1.4634-5.183 2.499-8.27 2.499-5.228 0-9.397-2.7917-9.397-8.3527V15.017h-6.152v-4.5254h6.152V4.27771h5.724v6.21389h9.757v4.5479h-9.757v13.9137c0 2.9719 2.298 4.4353 5.093 4.4353 2.005 0 3.718-.743 5.34-1.621l1.51 3.9625z"
      fill="url(#paint6_radial)"
    />
    <path
      d="M201.231 29.3809c0 4.9756-4.889 8.893-14.331 8.893-6.558 0-12.281-2.1388-16.135-5.5159l3.087-3.3771c3.133 2.6791 7.482 4.4352 13.205 4.4352 4.935 0 8.744-1.2607 8.744-3.9624 0-2.6792-3.471-3.5122-9.78-4.0076-7.279-.5403-14.219-2.2514-14.219-7.97 0-5.2232 5.385-8.44275 14.377-8.44275 5.475 0 10.613 1.95875 13.746 4.25515l-2.975 3.7149c-2.591-2.0038-6.152-3.4672-11.042-3.5123-3.628 0-8.653.743-8.653 3.6698 0 2.7468 4.259 3.2196 9.735 3.5573 8.18.6079 14.241 2.8593 14.241 8.2627z"
      fill="url(#paint7_radial)"
    />
    <path
      d="M65.7773 7.11447c1.9664 0 3.5605-1.59263 3.5605-3.55723C69.3378 1.59263 67.7437 0 65.7773 0c-1.9663 0-3.5604 1.59263-3.5604 3.55724 0 1.9646 1.5941 3.55723 3.5604 3.55723z"
      sx={{ fill: "logo" }}
    />
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.4 0 0 64.3424 65.357 3.11829)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.4 0 0 64.3423 65.3573 3.11828)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint2_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.3997 0 0 64.3424 65.3572 3.11828)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint3_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.4001 0 0 64.3424 65.3568 3.11831)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint4_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.4 0 0 64.3424 65.3573 3.11821)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint5_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.3999 0 0 64.3424 63.9174 3.11828)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint6_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(66.8347 0 0 66.7748 59.5457 3.11834)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
      <radialGradient
        id="paint7_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(64.3998 0 0 64.3423 64.7733 3.11825)"
      >
        <stop
          offset=".0902158"
          sx={{ stopColor: (t) => `${t.colors.logo}` }}
          stopOpacity="0"
        />
        <stop offset=".7455" sx={{ stopColor: (t) => `${t.colors.logo}` }} />
      </radialGradient>
    </defs>
  </svg>
);

export default SVG;
