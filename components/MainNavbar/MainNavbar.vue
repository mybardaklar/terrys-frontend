<script src="./MainNavbar.js"></script>

<template>
  <nav class="mainNavbar">
    <ul class="mainNavbar__nav">
      <li>
        <span>Ocassions</span>
        <div class="mainNavbar__dropdown">
          <ul>
            <li>
              <NuxtLink to="/categories/mothers-day">Mother's Day</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/best-sellers">Best Sellers</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/anniversary">Anniversary</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/birthday">Birthday Flowers</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/business-gifts">Business Gifts</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/congratulations">Congratulations</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/new-baby">New Baby</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/get-well">Get Well</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/just-because">Just Because</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/love-romance">Love &amp; Romance</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/thank-you">Thank You</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories/thinking-of-you">Thinking of You</NuxtLink>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <NuxtLink to="/categories/birthday">Birthday</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/categories/all-sympathy">Sympathy</NuxtLink>
        <div class="mainNavbar__megamenu">
          <div class="mainNavbar__megamenu__section">
            <h6>For Services</h6>
            <ul>
              <li>
                <NuxtLink to="/categories/standing-sprays-wreaths"
                  >Standing Sprays &amp; Wreaths</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/categories/funeral-service-bouquets"
                  >Funeral Service Bouquets</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/categories/for-caskets">For Caskets</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="mainNavbar__megamenu__section">
            <h6>For the Home</h6>
            <ul>
              <li>
                <NuxtLink to="#">Most Popular</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/categories/sympathy-plants">Sympathy Plants</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/categories/sympathy-floral-baskets"
                  >Sympathy Floral Baskets</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li>
        <NuxtLink to="/categories/get-well">Get Well</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/categories/winter-flowers">Winter</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/categories/gift-baskets-plants">Plants</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/categories/roses">Roses</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" src="./MainNavbar.scss" scoped></style>
