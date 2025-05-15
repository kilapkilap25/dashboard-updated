function showProfile() {
            document.getElementById('profilePage').style.display = 'block';
            document.getElementById('qrPage').style.display = 'none';
            document.getElementById('idPage').style.display = 'none';
        }
        
        function showQRCode() {
            document.getElementById('profilePage').style.display = 'none';
            document.getElementById('qrPage').style.display = 'flex';
            document.getElementById('idPage').style.display = 'none';
        }
        
        function showIDCard() {
            document.getElementById('profilePage').style.display = 'none';
            document.getElementById('qrPage').style.display = 'none';
            document.getElementById('idPage').style.display = 'flex';
        }

        
        function goBack() {
            window.location.href = "dashboard.html";
        }
        
        function logout() {
            // Create confirmation modal if it doesn't exist
            let confirmModal = document.getElementById('logoutConfirmModal');
            if (!confirmModal) {
                confirmModal = document.createElement('div');
                confirmModal.id = 'logoutConfirmModal';
                confirmModal.style.position = 'fixed';
                confirmModal.style.top = '0';
                confirmModal.style.left = '0';
                confirmModal.style.width = '100vw';
                confirmModal.style.height = '100vh';
                confirmModal.style.background = 'rgba(0,0,0,0.4)';
                confirmModal.style.display = 'flex';
                confirmModal.style.justifyContent = 'center';
                confirmModal.style.alignItems = 'center';
                confirmModal.style.zIndex = '9999';
                confirmModal.innerHTML = `
                    <div style="background:#fff;padding:2rem 2.5rem;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.15);text-align:center;">
                        <h3>Confirm Logout</h3>
                        <p>Are you sure you want to logout?</p>
                        <button id="confirmLogoutBtn" style="margin:0 10px 0 0;padding:0.5rem 1.5rem;background:#e74c3c;color:#fff;border:none;border-radius:5px;cursor:pointer;">Logout</button>
                        <button id="cancelLogoutBtn" style="padding:0.5rem 1.5rem;background:#bbb;color:#222;border:none;border-radius:5px;cursor:pointer;">Cancel</button>
                    </div>
                `;
                document.body.appendChild(confirmModal);
            } else {
                confirmModal.style.display = 'flex';
            }

            // Handle buttons
            document.getElementById('confirmLogoutBtn').onclick = function() {
                window.location.href = "login.html";
            };
            document.getElementById('cancelLogoutBtn').onclick = function() {
                confirmModal.style.display = 'none';
            };
        }