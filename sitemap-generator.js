const path = require("path");
const fs = require("fs");
const Sitemap = require("react-router-sitemap").default;

// Define your routes with the 'priority' attribute
const router = [
    { path: '/', priority: 1.0 },
    { path: '/aboutus', priority: 0.8 },
    { path: '/aporafulfillmentautomation', priority: 0.8 },
    { path: '/services', priority: 0.8 },
    { path: '/multichannelintegration', priority: 0.7 },
    { path: '/orderprocessing', priority: 0.7 },
    { path: '/picklistgeneration', priority: 0.7 },
    { path: '/workforcemanagement', priority: 0.6 },
    { path: '/picksequencing', priority: 0.6 },
    { path: '/pickandshipping', priority: 0.6 },
    { path: '/fulfillmentvalidation', priority: 0.6 },
    { path: '/ecommerceintegration', priority: 0.5 },
    { path: '/purveyordermanagementsystem', priority: 0.5 },
    { path: '/inboundreceipt', priority: 0.5 },
    { path: '/crossdocking', priority: 0.5 },
    { path: '/purveydeconsolidation', priority: 0.5 },
    { path: '/qualitycheck', priority: 0.5 },
    { path: '/repackingandputaway', priority: 0.5 },
    { path: '/aporapickmanagement', priority: 0.5 },
    { path: '/dispatch', priority: 0.5 },
    { path: '/inventorymanagement', priority: 0.5 },
    { path: '/apiintegration', priority: 0.5 },
    { path: '/iotintegration', priority: 0.5 },
    { path: '/articles', priority: 0.4 },
    { path: '/productwarehousemanagementsystem', priority: 0.4 },
    { path: '/blog', priority: 0.4 },
    { path: '/deliverymanagementsystem', priority: 0.4 },
    { path: '/yardmanagement', priority: 0.4 },
    { path: '/oncloud', priority: 0.4 },
    { path: '/contactus', priority: 0.3 },
    // Add other routes with priority
];

// Generate the sitemap with priority
const generateSitemap = () => {
  return new Sitemap(router)
    .build("https://www.nacresys.com")  // Replace with your domain
    .save(path.resolve(__dirname, "public", "sitemap.xml"));  // Save the sitemap to the public directory
};

generateSitemap();