English: SaaS Smart Restaurant Management Platform with QR Code Ordering
● Vietnamese: Nền tảng SaaS quản lý nhà hàng thông minh với gọi món QR
● Abbreviation: S2O (Scan2Order)
a. Context:
● The F&B industry in Vietnam and worldwide is rapidly moving toward operational optimization, digital transformation, and labor cost reduction. This creates a strong demand for SaaS-based solutions that are easy to deploy, scalable, and cost-effective.
● Traditional paper menus come with multiple limitations: high printing costs, inconvenience when updating prices or promotions, easy wear and tear, and service delays when customers must wait for staff to take orders.
● QR code ordering is becoming increasingly popular thanks to its convenience, speed, and modern customer experience. However, most restaurants still rely on fragmented or self-built solutions that are inefficient and hard to maintain.
● Restaurants need a unified, stable, and cost-efficient technology platform to manage their operations. Building and maintaining a custom system for each restaurant is expensive, complex, and does not scale.
● Many existing solutions lack multi-tenant architecture, making it difficult to serve multiple restaurants on one shared platform while still ensuring isolated data and customizable experiences for each business.
● Modern consumers expect more than just a QR menu at the table—they want an all-in-one mobile application where they can explore multiple restaurants, make reservations, read reviews, and enjoy a personalized dining journey. Current systems rarely deliver this experience.
● The absence of an integrated AI assistant and intelligent recommendation engine makes it difficult for customers to discover suitable dining options based on weather, location, personal preferences, or behavior insights—representing a major opportunity for a SaaS platform built with AI at its core.
● Most restaurants do not have a dedicated QA chatbot capable of automatically answering common customer inquiries (opening hours, menu availability, best-selling dishes, seating options, policies, etc.), resulting in unnecessary workload for staff.

b. Proposed Solutions: Building an Online QR Menu Platform using a Multi-Tenant SaaS Model, combining a web app for restaurants and a mobile/web app for customers, with the following feature groups:
● Business Customer (Restaurant):
○ Online menu management: images, prices, descriptions, and item availability in real time.
○ Generate QR codes for each table and each branch.
○ Receive and process customer orders, fully synchronized with the kitchen/bar.
○ Staff roles and permissions, revenue reports, inventory tracking, and real-time analytics.
○ Multi-branch management with separate configuration for each location.
○ Data isolation for each restaurant through a multi-tenant architecture.
● Web App for Customers 
○ Scan QR codes to view the menu instantly at the table.
○ Select items, place orders, and track order status in real time.
○ No app installation required — runs directly on the browser.
● Mobile App for Customers 
○ A universal mobile app where customers can explore multiple restaurants on the platform.
■ Discover restaurants available on the system
■ View menus before visiting the restaurant.
■ Make table reservations directly through the app.
■ View reviews, photos, and featured dishes.
■ Save favorite restaurants, view booking history, and dining history.
○ AI Features:
■ AI Recommendation Engine — suggests restaurants based on:
– current location
– weather conditions
– personal preferences
– preferred time and price range
■ AI Chatbot QA — answers restaurant-specific questions:
– opening hours
– menu availability
– table availability
– best-selling dishes
– reservation assistance
● SaaS Platform (Multi-Tenant Architecture):
○ A single platform serving multiple restaurants, each with isolated data and custom configurations.
○ Restaurants can activate and operate immediately after registration — no individual deployment required.
○ Feature updates and improvements are delivered uniformly to all tenants.
○ Reduces infrastructure cost, maintenance effort, and supports large-scale expansion.
● Administrator (Web App):
○ System-wide management, restaurant onboarding approval, tenant configuration, data monitoring, and platform governance.

● Functional requirement 
● Guest
MainFlow:

○ (Web App — accessed via restaurant QR code, with session timeout)
■ Orders dishes.
■ Add notes to ordered dishes.
■ View order history.
■ Track the status of ordered dishes.
■ View the menu.
■ Search / filter menu items by category.
■ Request payment / request bill.
● Customer
○ (Web App — accessed via restaurant QR code, with session timeout)
■ Orders dishes.
■ Add notes to ordered dishes.
■ View order history.
■ Track the status of ordered dishes.
■ View the menu.
■ Search / filter menu items by category.
■ Request payment / request bill.
■ Authentication via mobile app.
○ Mobile App
MainFlow:

■ View restaurants.
■ View recommended restaurants.
■ Search for restaurants.
■ Get directions to a restaurant.
■ Scan QR codes (menu).
■ Log in / register.
■ View, rate, edit, or delete restaurant reviews.
■ Make table reservations.
■ View history of dishes, restaurants visited, and total spending.
■ Membership tiers: iron, silver, gold, diamond, etc.
■ AI Chatbot QA — answers restaurant-specific questions
● Business Customer (Restaurant)
MainFlow:

○ Web
■ Manage and customize menu items.
■ Manage orders for each table.
■ Manage table status (occupied, available, reserved).
■ Manage discounts for each dish per restaurant.
■ View restaurant revenue.
■ Generate QR codes for each table.
■ Issue bills for tables.
■ Update or change bank payment QR codes.
■ Manage role-based access (chef, manager, cashier).
■ Convert completed payment amounts into reward points; customers can redeem points to order items in the points menu.
■ Using AI assistance to create a menu.
● Admin 


○ Web
■ Manage registered restaurants.
■ Manage revenue.
■ Manage users.
■ Configure the recommendation algorithm AI used for restaurant recommendations in the mobile app.



● Non-functional requirement: 
○ The system must support a scalable multi-tenant architecture with strict data isolation and high performance.
○ Cloud-based deployment with Docker, Redis, and real-time communication must ensure low latency and high availability.
○ Security standards must be enforced, including encryption, JWT authentication, and role-based access control.
○ The platform must provide reliable monitoring, logging, and CI/CD for easy maintenance and continuous deployment.
3.2. Main proposal content (including result and product) 
● Theory and practice (document):
○ Students should apply the software development process and UML 2.0 in the modeling system. 
○ The documents include User Requirements, Software Requirement Specifications, Architecture Design, Detail Design, System Implementation, Testing Document, Installation Guide, source code, and deployable software packages.
○ Server-side technologies:
■ Server: Python.
■ Database Design: PostgreSQL, MongoDB, Qdrant.
■ Caching: Redis.
○ Client-side technologies:
■ Web Client: React/NextJS.
■ Mobile App: React Native.
○ AI module:
■ AI Chatbot QA: Retrieval-augmented generation + LLM.
■ Recommendation system: Vector Search + Embedding (Semantic Matching) + Rule-Based.
● Products: 
● Mobile application.
● Web application.
● Proposed Tasks:
● Task package 1: Develop the Web application for the Admin system.
● Task package 2: Develop the Web application for Restaurant Management.
● Task package 3: Develop the Web application for Guest (QR Menu).
● Task package 4: Develop the Mobile application for Customers.
● Task package 5: Develop the AI modules (Chatbot QA & Recommendation Engine).
● Task package 6: Develop the Web API for the system (Multi-Tenant SaaS Architecture).
● Task package 7: Build – Deploy – and Test the system.
● Task package 8: Prepare all required documents: System Analysis & Design, Test Plan, Installation Manual, User Manual.


4. Other comments (propose all relative things if have). 
