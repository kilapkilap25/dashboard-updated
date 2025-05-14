// Service modal content
const serviceContent = {
  healthcare: {
    title: "Health Care Services",
    description: "Access a wide range of health services designed to support your wellbeing and address your healthcare needs.",
    options: [
      "E-Consultation",
      "Person with Disability",
      "Health Services"
    ],
    providers: {
      "Health Services": [
        {
          name: "PhilHealth",
          icon: "/api/placeholder/50/50",
          description: "Philippine Health Insurance Corporation - National Health Insurance Program",
          url: "#"
        }
      ],
      "E-Consultation": [
        {
          name: "Online Doctor Consultation",
          icon: "/api/placeholder/50/50",
          description: "Connect with healthcare professionals online",
          url: "#"
        },
        {
          name: "Telehealth Services",
          icon: "/api/placeholder/50/50",
          description: "Remote healthcare services",
          url: "#"
        }
      ],
      "Person with Disability": [
        {
          name: "PWD ID Application",
          icon: "/api/placeholder/50/50",
          description: "Apply for Person with Disability identification card",
          url: "#"
        },
        {
          name: "PWD Benefits Information",
          icon: "/api/placeholder/50/50",
          description: "Information about benefits for persons with disabilities",
          url: "#"
        }
      ]
    }
  },
  education: {
    title: "Educational Assistance",
    description: "Empowering minds and shaping futures through accessible and inclusive education programs for all age groups.",
    options: [
      "Scholarship Programs",
      "Online Enrollment Forms",
      "Information"
    ],
    providers: {
      "Information": [
        {
          name: "DepEd (Department of Education)",
          icon: "/api/placeholder/50/50",
          description: "K-12 education information and resources",
          url: "#"
        },
        {
          name: "CHED (Commission on Higher Education)",
          icon: "/api/placeholder/50/50",
          description: "Higher education information and resources",
          url: "#"
        },
        {
          name: "TESDA (Technical Education and Skills Development Authority)",
          icon: "/api/placeholder/50/50",
          description: "Technical and vocational education information",
          url: "#"
        }
      ]
    }
  },
  taxes: {
    title: "Taxes and Permits",
    description: "Streamlined processing for all your tax filings and permit applications to ensure compliance and ease of doing business.",
    options: [
      "Appointments",
      "Miscellaneous",
      "Business",
      "Apply for permit",
      "Tax Payment"
    ],
    providers: {
      "Appointments": [
        {
          name: "SEC (Securities and Exchange Commission) Appointment System",
          icon: "/api/placeholder/50/50",
          description: "Schedule appointments for SEC services",
          url: "#"
        }
      ],
      "Business": [
        {
          name: "BIR (Bureau of Internal Revenue)",
          icon: "/api/placeholder/50/50",
          description: "Tax filing and payment services",
          url: "#"
        },
        {
          name: "DTI (Business Name Registration - BNRS Portal)",
          icon: "/api/placeholder/50/50",
          description: "Business name registration services",
          url: "#"
        },
        {
          name: "SEC (Securities and Exchange Commission) - Services",
          icon: "/api/placeholder/50/50",
          description: "Corporate registration and compliance services",
          url: "#"
        }
      ]
    }
  },
  government: {
    title: "Government Assistance and Offers",
    description: "Support programs designed to enhance economic resilience and social well-being across communities.",
    options: [
      "Appointments",
      "Services",
      "Application Forms",
      "Search Service"
    ],
    providers: {
      "Services": [
        {
          name: "DOLE (Department of Labor and Employment)",
          icon: "/api/placeholder/50/50",
          description: "Employment and labor services",
          url: "#"
        },
        {
          name: "Philippine Overseas Employment Administration",
          icon: "/api/placeholder/50/50",
          description: "Overseas employment services",
          url: "#"
        },
        {
          name: "Overseas Workers Welfare Administration",
          icon: "/api/placeholder/50/50",
          description: "Welfare services for overseas Filipino workers",
          url: "#"
        },
        {
          name: "DSWD (Department of Social Welfare and Development)",
          icon: "/api/placeholder/50/50",
          description: "Social welfare and development services",
          url: "#"
        },
        {
          name: "Land Transportation Office",
          icon: "/api/placeholder/50/50",
          description: "Driver's licensing and vehicle registration services",
          url: "#"
        },
        {
          name: "LAND TRANSPORTATION FRANCHISING AND REGULATORY BOARD NATIONAL CAPITAL REGION",
          icon: "/api/placeholder/50/50",
          description: "Public transportation franchising and regulation services",
          url: "#"
        },
        {
          name: "DOJ (Department of Justice)",
          icon: "/api/placeholder/50/50",
          description: "Legal and justice services",
          url: "#"
        }
      ]
    }
  }
};

// Get modal elements
const modal = document.getElementById("serviceModal");
const modalBody = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".close");

// Get provider modal elements
const providerModal = document.getElementById("serviceProviderModal");
const providerBody = document.querySelector(".provider-body");
const providerTitle = document.getElementById("providerTitle");
const providerCloseBtn = document.querySelector(".provider-close");

// Add click event listeners to buttons
document.querySelectorAll('.service-content button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    const serviceDiv = e.target.closest('.service');
    const serviceType = serviceDiv.getAttribute('data-service');
    
    // Get content for this service
    const content = serviceContent[serviceType];
    
    // Create modal content
    let optionsHTML = '';
    content.options.forEach(option => {
      optionsHTML += `<div class="service-option" data-service="${serviceType}" data-option="${option}">${option}</div>`;
    });
    
    modalBody.innerHTML = `
      <div class="service-details">
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <div class="service-options">
          ${optionsHTML}
        </div>
      </div>
    `;
    
    // Show modal
    modal.style.display = "block";
    
    // Add active class
    document.querySelectorAll('.service').forEach(s => {
      s.classList.remove('active');
    });
    serviceDiv.classList.add('active');
  });
});

// Modal option click event
modalBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('service-option')) {
    const serviceType = e.target.getAttribute('data-service');
    const option = e.target.getAttribute('data-option');
    const content = serviceContent[serviceType];
    
    // Check if providers exist for this option
    if (content.providers && content.providers[option]) {
      const providers = content.providers[option];
      
      // Create provider list HTML
      let providersHTML = '<div class="services-list">';
      providers.forEach(provider => {
        providersHTML += `
          <div class="service-item" data-url="${provider.url}">
            <div class="service-icon">
              <img src="${provider.icon}" alt="${provider.name}" />
            </div>
            <div class="service-text">
              <div class="service-title">${provider.name}</div>
              <div class="service-description">${provider.description || ''}</div>
            </div>
          </div>
        `;
      });
      providersHTML += '</div>';
      
      // Update provider modal
      providerTitle.textContent = option;
      providerBody.innerHTML = providersHTML;
      
      // Show provider modal
      providerModal.style.display = "block";
      
      // Hide the service modal
      modal.style.display = "none";
    }
  }
});

// Service provider item click event
document.addEventListener('click', (e) => {
  const serviceItem = e.target.closest('.service-item');
  if (serviceItem) {
    const url = serviceItem.getAttribute('data-url');
    if (url) {
      // In a real application, this would navigate to the URL
      alert(`You selected: ${serviceItem.querySelector('.service-title').textContent}`);
    }
  }
});

// Close modal when X is clicked
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });
}

// Close provider modal when X is clicked
if (providerCloseBtn) {
  providerCloseBtn.addEventListener('click', () => {
    providerModal.style.display = "none";
  });
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
  if (e.target === providerModal) {
    providerModal.style.display = "none";
  }
});