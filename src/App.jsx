home links ":

import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});

  // Management Contacts
  const managementContacts = [
    { id: 'ceo', name: "Rambabu Vasupilli", Role: "CEO", mobile: "+1 647-968-3243", status: "Online" },
    { id: 'hr', name: "Bhuvana", Role: "HR", mobile: "+1 647-366-1915", status: "Online" },
    { id: 'sales', name: "Mani Kundi", Role: "Sales Manager", mobile: "+1 647-619-9000", status: "Away" }
  ];

  // FULL RESTORED Marketing Phase Directory
  const marketingDirectory = [
    { name: "Sai Manaswini Kondlapudi", Role: "AWS Cloud Engineer", Phase: "Resume Marketing" },
    { name: "Venkata Gopichand Gummadi", Role: "AWS Cloud Engineer", Phase: "Resume Marketing" },
    { name: "Naga Pavan Kalyan", Role: "AWS Data Engineer", Phase: "Resume Marketing" },
    { name: "Akhil Diddi", Role: "AWS Data Engineer", Phase: "Resume Marketing" },
    { name: "Rajat Roy", Role: "AWS Data Engineer", Phase: "Resume Marketing" },
    { name: "Nandish S Reddy", Role: "Azure Cloud Engineer", Phase: "Resume Marketing" },
    { name: "Bharadwaz Rushi Dabbiru", Role: "Azure Data Engineer", Phase: "Resume Marketing" },
    { name: "Kieshore Ravichandran", Role: "Azure Data Engineer", Phase: "Resume Marketing" },
    { name: "Saheb Singh Bhatia", Role: "Azure Data Engineer", Phase: "Resume Marketing" },
    { name: "Priyanshu Singh", Role: "Azure Data Engineer", Phase: "Resume Marketing" },
    { name: "Sravan Yallampalli", Role: "Data Analyst", Phase: "Resume Marketing" },
    { name: "Radhika Sharma", Role: "Data Analyst", Phase: "Resume Marketing" },
    { name: "Rahul Venukumar", Role: "Data Scientist", Phase: "Resume Marketing" },
    { name: "Jayanth Nakka", Role: "Data Scientist", Phase: "Resume Marketing" },
    { name: "Prakash Kumar", Role: "Data Scientist", Phase: "Resume Marketing" },
    { name: "Saikrupa Korkantiwar", Role: "DevOps Engineer", Phase: "Resume Marketing" },
    { name: "Surya Venkata Subash Chandra Kundeti", Role: "IT and Systems Analyst", Phase: "Resume Marketing" },
    { name: "Maguluri Manikanta", Role: "Software Developer", Phase: "Resume Marketing" },
    { name: "Sonali Lingam", Role: "AWS Cloud Engineer", Phase: "Resume Marketing" },
    { name: "Makkapati Laxmi Tilak", Role: "Data Analyst", Phase: "Resume Marketing" },
    { name: "Hemachand Sigatapu", Role: "Data Analyst", Phase: "Resume Marketing" },
    { name: "Dinesh Kalluri", Role: "DevOps Engineer", Phase: "Resume Marketing" },
    { name: "Vijaya Sai Tejaswini Thotakura", Role: "Data Analyst", Phase: "Resume Marketing" },
    { name: "Sreekanth Reddy Ambavarapu", Role: "Business Analyst", Phase: "Resume Marketing" },
    { name: "Saraswathi Mahadev", Role: "Data Analyst", Phase: "Resume Marketing" }
  ];

  // FULL RESTORED Placed Candidates List
  const placedAlumni = [
    { name: "Prakashini Mushibe", Role: "Software Developer", program: "Learning Program", status: "Placed" },
    { name: "Shreya Jayeshbhai Patel", Role: "Software Developer", program: "Learning Program", status: "Placed" },
    { name: "Madhavi Gaddampally 2", Role: "Software Developer", program: "Learning Program", status: "Placed" },
    { name: "Abhishek Amola", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Arati Kakadiya", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Deepasree Nalinakumari", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Divahar Baskaran", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Kishore Suresh Kumar", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Krishna Priyatham", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Manisha Mohanty", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Navaneetha Krishnan Jagadeesan", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Nishant Patel", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Priyanka Saseendhiran", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Rajendra Medini", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Shivangi Bhagat", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Sravani Kondu", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Sree Vidhiya", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Varun Sharawat", Role: "Software Developer", program: "Marketing Program", status: "Placed" },
    { name: "Purna Santhosh Tenneti", Role: "Azure Data Engineer", program: "Marketing Program", status: "Placed" }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedChat) return;
    const personId = selectedChat.name; 
    const currentMsgs = chatHistory[personId] || [];
    setChatHistory({
      ...chatHistory,
      [personId]: [...currentMsgs, { text: message, sender: 'me', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
    });
    setMessage("");
  };

  const Navbar = () => (
    <nav style={navStyle}>
      <h2 style={navBrandStyle}>NCPL <span style={{ color: '#0a66c2' }}>Connect</span></h2>
      <div style={{ display: 'flex' }}>
        <button onClick={() => setCurrentPage('Home')} style={navBtnStyle}>Home</button>
        <button onClick={() => setCurrentPage('Profiles')} style={navBtnStyle}>Marketing Phase</button>
        <button onClick={() => setCurrentPage('Jobs')} style={navBtnStyle}>Placed Stories</button>
      </div>
    </nav>
  );

  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
        <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
          <div style={{ flex: 1, padding: '20px' }}>
            <div style={indiaHighlightStyle}>
               🔥 <strong>India Marketing Phase:</strong> High-priority recruitment drive in progress for Cloud and Data Engineers.
            </div>
            <div style={heroSectionStyle}>
              <h3 style={{ color: '#DDF60A', margin: '0 0 10px 0', fontSize: '1.2rem' }}>WELCOME TO NCPL WORLD BY SIVA</h3>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>NCPL Alumni Connect Hub 🚀</h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                Join our exclusive ecosystem where top-tier professionals and alumni collaborate. 
                NCPL Connect is designed to bridge the gap between skilled engineers and industry leaders.
              </p>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h3 style={{ marginBottom: '20px', color: '#333' }}>Support & Management Directory</h3>
              <div style={tableWrapper}>
                <table style={tableStyle}>
                  <thead>
                    <tr style={{ background: '#f8f9fa' }}>
                      <th style={thStyle}>Name</th>
                      <th style={thStyle}>Designation</th>
                      <th style={thStyle}>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {managementContacts.map((c, i) => (
                      <tr key={i} style={trStyle}>
                        <td style={tdStyle}><strong>{c.name}</strong></td>
                        <td style={tdStyle}>{c.Role}</td>
                        <td style={tdStyle}><span style={{ color: '#0a66c2' }}>{c.mobile}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div style={sidebarStyle}>
            <div style={sidebarHeaderStyle}>Quick Connect</div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {managementContacts.map((contact, i) => (
                <div key={i} onClick={() => setSelectedChat(contact)} style={{...sidebarItemStyle, background: selectedChat?.name === contact.name ? '#f3f6f8' : 'transparent'}}>
                  <div style={avatarCircleStyle}>{contact.name.charAt(0)}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>{contact.name}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#666' }}>{contact.Role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 'Profiles') {
      return (
        <div style={containerStyle}>
          <h2 style={pageHeaderStyle}>Active Marketing Candidates ({marketingDirectory.length})</h2>
          <div style={directoryGridStyle}>
            {marketingDirectory.map((person, i) => (
              <div key={i} style={marketingCardStyle}>
                <div style={{ fontWeight: 'bold' }}>{person.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#0a66c2', margin: '5px 0' }}>{person.Role}</div>
                <div style={phaseBadgeStyle}>{person.Phase}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentPage === 'Jobs') {
      return (
        <div style={containerStyle}>
          <h2 style={pageHeaderStyle}>Success Stories & Alumni Network ({placedAlumni.length}) 🎓</h2>
          <div style={placedGridStyle}>
            {placedAlumni.map((member, i) => (
              <div key={i} style={placedCardStyle}>
                <div style={avatarCircleLargeStyle}>{member.name.charAt(0)}</div>
                <div style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '1.1rem' }}>{member.name}</div>
                <div style={{ color: '#0a66c2', fontSize: '0.9rem', fontWeight: '600' }}>{member.Role}</div>
                <div style={successBox}>
                  <strong>Success Story:</strong><br/> 
                  Successfully placed via NCPL's specialized {member.program} path.
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                  <button onClick={() => setSelectedChat(member)} style={connectBtn}>Chat</button>
                  <button style={linkedinBtn}>LinkedIn</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ background: '#f4f2ee', minHeight: '100vh', fontFamily: 'system-ui' }}>
      <Navbar />
      {renderPage()}
      {selectedChat && (
        <div style={chatPopupStyle}>
          <div style={chatPopupHeaderStyle}>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Chat: {selectedChat.name}</span>
            <button onClick={() => setSelectedChat(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={chatBodyStyle}>
            {chatHistory[selectedChat.name]?.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === 'me' ? 'right' : 'left', marginBottom: '10px' }}>
                <div style={{...msgBubbleStyle, background: msg.sender === 'me' ? '#0a66c2' : '#e6e6e6', color: msg.sender === 'me' ? 'white' : 'black'}}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} style={chatInputAreaStyle}>
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Send a message..." style={chatInputStyle} />
            <button type="submit" style={sendBtnStyle}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

// Styles
const navStyle = { padding: '10px 50px', background: 'white', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const navBrandStyle = { margin: 0, fontSize: '1.5rem', fontWeight: '800' };
const navBtnStyle = { background: 'none', border: 'none', color: '#666', margin: '0 10px', cursor: 'pointer', fontWeight: 'bold' };
const indiaHighlightStyle = { background: '#fff9e6', border: '1px solid #ffe58f', padding: '12px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center', color: '#856404', fontSize: '0.95rem' };
const heroSectionStyle = { background: '#1d2226', padding: '50px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' };
const containerStyle = { padding: '40px', maxWidth: '1200px', margin: '0 auto' };
const pageHeaderStyle = { marginBottom: '30px', color: '#333', textAlign: 'center', fontSize: '2rem' };
const tableWrapper = { background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' };
const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const thStyle = { padding: '12px', textAlign: 'left', fontSize: '0.85rem', color: '#666', background: '#f8f9fa' };
const tdStyle = { padding: '12px', borderTop: '1px solid #eee', fontSize: '0.9rem' };
const trStyle = { borderBottom: '1px solid #eee' };
const sidebarStyle = { width: '280px', background: 'white', borderLeft: '1px solid #ddd', display: 'flex', flexDirection: 'column' };
const sidebarHeaderStyle = { padding: '15px', fontWeight: 'bold', borderBottom: '1px solid #eee' };
const sidebarItemStyle = { display: 'flex', gap: '10px', padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f9f9f9' };
const avatarCircleStyle = { width: '35px', height: '35px', borderRadius: '50%', background: '#0a66c2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' };
const directoryGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px' };
const marketingCardStyle = { padding: '15px', background: 'white', borderRadius: '8px', border: '1px solid #ddd' };
const phaseBadgeStyle = { fontSize: '0.7rem', color: '#27ae60', background: '#e8f6ef', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' };
const placedGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' };
const placedCardStyle = { padding: '25px', background: 'white', borderRadius: '12px', textAlign: 'center', border: '1px solid #ddd' };
const avatarCircleLargeStyle = { width: '60px', height: '60px', borderRadius: '50%', background: '#27ae60', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto', fontWeight: 'bold' };
const successBox = { background: '#f9f9f9', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#555', marginTop: '15px', border: '1px solid #eee', textAlign: 'left' };
const connectBtn = { flex: 1, padding: '8px', background: '#0a66c2', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' };
const linkedinBtn = { flex: 1, padding: '8px', background: 'white', color: '#0a66c2', border: '1px solid #0a66c2', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' };
const chatPopupStyle = { position: 'fixed', bottom: 0, right: '300px', width: '300px', height: '400px', background: 'white', boxShadow: '0 -2px 15px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', borderRadius: '8px 8px 0 0', zIndex: 1000 };
const chatPopupHeaderStyle = { padding: '12px', background: '#1d2226', color: 'white', display: 'flex', justifyContent: 'space-between', borderRadius: '8px 8px 0 0' };
const chatBodyStyle = { flex: 1, padding: '10px', overflowY: 'auto', background: '#f4f2ee' };
const msgBubbleStyle = { padding: '8px 12px', borderRadius: '12px', fontSize: '0.85rem', maxWidth: '85%' };
const chatInputAreaStyle = { padding: '10px', borderTop: '1px solid #eee', display: 'flex', gap: '5px' };
const chatInputStyle = { flex: 1, border: '1px solid #ddd', borderRadius: '4px', padding: '8px' };
const sendBtnStyle = { background: '#0a66c2', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };

export default App;