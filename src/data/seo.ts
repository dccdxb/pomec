import { pages, faqs, type PageKey } from '../components/Pomec'
const origin = 'https://pomec-technology-website.netlify.app'
const descriptions: Record<PageKey,string> = {
 home:'Pomec Technology provides property management, building facility management and AMC services in Bangalore. Based on Hennur Bagalur Road. Call +91 96204 79934.',
 services:'Explore residential and commercial property management, building facility management and maintenance coordination in Bangalore with Pomec Technology.',
 amc:'Discuss annual maintenance contracts for your Bangalore building. Agree preventive schedules, equipment coverage and exclusions with Pomec Technology.',
 price:'Request a scope-based quotation for property management, building facility management or an annual maintenance contract in Bangalore.',
 contact:'Contact Pomec Technology on Hennur Bagalur Road, Bangalore. Call +91 96204 79934 or email pomect@gmail.com to discuss property care.',
 about:'Learn about Pomec Technology, a property and building facility management business based on Hennur Bagalur Road in Bangalore.',
 blog:'Practical property maintenance guidance for Bangalore owners: preventive checklists, AMC contract questions and monsoon preparation.',
 faq:'Answers about Pomec Technology property management services, AMC coverage, pricing, service areas and quotations in Bangalore.',
}
export function pageHead(page:PageKey) {
 const url = origin + (page==='home'?'':`/${page}`)
 const title=pages[page].title+' | Pomec Technology'
 const business = {'@context':'https://schema.org','@type':'LocalBusiness','@id':origin+'/#business',name:'Pomec Technology',url:origin,telephone:'+91-96204-79934',email:'pomect@gmail.com',logo:origin+'/logo.svg',address:{'@type':'PostalAddress',streetAddress:'Hennur Bagalur Road',addressLocality:'Bangalore',addressRegion:'Karnataka',addressCountry:'IN'},areaServed:{'@type':'City',name:'Bangalore'},description:descriptions.home,hasOfferCatalog:{'@type':'OfferCatalog',name:'Property and facility services',itemListElement:['Property management','Building facility management','Annual maintenance contracts'].map(name=>({'@type':'Offer',itemOffered:{'@type':'Service',name,areaServed:'Bangalore'}}))}}
 const schema: object[]=[business,{'@context':'https://schema.org','@type':'WebPage',name:title,url,description:descriptions[page],about:{'@id':origin+'/#business'}},{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:origin},...(page==='home'?[]:[{'@type':'ListItem',position:2,name:pages[page].title,item:url}])]}]
 if(page==='faq') schema.push({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))})
 return {meta:[{title},{name:'description',content:descriptions[page]},{property:'og:title',content:title},{property:'og:description',content:descriptions[page]},{property:'og:url',content:url},{name:'geo.region',content:'IN-KA'},{name:'geo.placename',content:'Bangalore'}],links:[{rel:'canonical',href:url}],scripts:[{type:'application/ld+json',children:JSON.stringify(schema)}]}
}
