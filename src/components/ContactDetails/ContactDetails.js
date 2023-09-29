import React from 'react'
import { Modal, Button } from 'antd'
import { useDispatch } from 'react-redux'
// import { requestMeeting, addToWishList } from './redux/actions'

const ContactDetails = ({ contact, visible, onClose }) => {
  const dispatch = useDispatch()

  const handleRequestMeeting = () => {
    // dispatch(requestMeeting(contact._id))
  }

  const handleAddToWishList = () => {
    // dispatch(addToWishList(contact.companyId)) // Assuming companyId is available in the contact object
  }

  return (
    <Modal
      title={`${contact.firstname} ${contact.lastname}`}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key='back' onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <div>
        <img
          src={contact.profileImage}
          alt={`${contact.firstname} ${contact.lastname}`}
          style={{ maxWidth: '100%' }}
        />
      </div>
      <p>
        <strong>Position:</strong> {contact.position}
      </p>
      <p>
        <strong>Country:</strong> {contact.country}
      </p>
      <p>
        <strong>Contacts:</strong> {/* Display contacts for the company */}
      </p>
      <p>
        <strong>Brief:</strong> {contact.brief}
      </p>
      <div style={{ marginTop: '20px' }}>
        <Button type='primary' onClick={handleRequestMeeting} style={{ marginRight: '10px' }}>
          Request Meeting
        </Button>
        <Button type='primary' onClick={handleAddToWishList} style={{ marginRight: '10px' }}>
          Add to Wish List
        </Button>
        <Button type='primary' onClick={onClose} style={{ marginRight: '10px' }}>
          Open Profile
        </Button>
        <Button type='primary' onClick={onClose}>
          Open Company Profile
        </Button>
      </div>
    </Modal>
  )
}

export default ContactDetails
