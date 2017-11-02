package cn.venice.D00.model;

/**
 * D0003 entity. @author MyEclipse Persistence Tools
 */

public class D0003 implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 2889786237998688164L;
	private String userno;
	private String username;
	private String passwd;
	private String roleno;
	private String bmdm;
	private String deltag;

	// Constructors

	/** default constructor */
	public D0003() {
	}

	/** minimal constructor */
	public D0003(String userno) {
		this.userno = userno;
	}

	/** full constructor */
	public D0003(String userno, String username, String passwd, String roleno,
                 String bmdm, String deltag) {
		this.userno = userno;
		this.username = username;
		this.passwd = passwd;
		this.roleno = roleno;
		this.bmdm = bmdm;
		this.deltag = deltag;
	}

	// Property accessors

	public String getUserno() {
		return this.userno;
	}

	public void setUserno(String userno) {
		this.userno = userno;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasswd() {
		return this.passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getRoleno() {
		return this.roleno;
	}

	public void setRoleno(String roleno) {
		this.roleno = roleno;
	}

	public String getBmdm() {
		return this.bmdm;
	}

	public void setBmdm(String bmdm) {
		this.bmdm = bmdm;
	}

	public String getDeltag() {
		return this.deltag;
	}

	public void setDeltag(String deltag) {
		this.deltag = deltag;
	}

}