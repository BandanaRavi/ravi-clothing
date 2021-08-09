import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherprops}) =>(
    <div className='group'>
    <input className='form-input' onchange={handleChange} {...otherprops}/>
    {
        label ?
        <label className={`${otherprops.value.length ? 'shrink': ''} form-input-label`} >
        {label}
        </label>
        :null
    }
    </div>
    )

export default FormInput;