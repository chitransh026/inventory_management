import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import './Suppliers.css';

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactmail: '',
    contactnumber: '',
    address: '',
  });

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = async () => {
    try {
      const data = await api.getSuppliers();
      setSuppliers(data);
    } catch (error) {
      console.error('Error loading suppliers:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createSupplier(formData);
      setShowModal(false);
      setFormData({
        name: '',
        contactmail: '',
        contactnumber: '',
        address: '',
      });
      loadSuppliers();
    } catch (error) {
      console.error('Error creating supplier:', error);
      alert('Error creating supplier. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="suppliers-container">
      <div className="section-header">
        <h2>Suppliers</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Add Supplier
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-state">
                  No suppliers found. Add your first supplier!
                </td>
              </tr>
            ) : (
              suppliers.map((supplier) => (
                <tr key={supplier._id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.contactmail}</td>
                  <td>{supplier.contactnumber}</td>
                  <td>{supplier.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal active" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add New Supplier</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactmail">Email *</label>
                <input
                  type="email"
                  id="contactmail"
                  name="contactmail"
                  value={formData.contactmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactnumber">Phone *</label>
                <input
                  type="tel"
                  id="contactnumber"
                  name="contactnumber"
                  value={formData.contactnumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Supplier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Suppliers;

