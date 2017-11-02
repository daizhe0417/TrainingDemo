package cn.venice.D00.model;

/**
 * D0002 entity. @author MyEclipse Persistence Tools
 */

public class D0002 implements java.io.Serializable {

	// Fields

	private String roleno;
	private String rolename;

	// Constructors

	/** default constructor */
	public D0002() {
	}

	/** minimal constructor */
	public D0002(String roleno) {
		this.roleno = roleno;
	}

	/** full constructor */
	public D0002(String roleno, String rolename) {
		this.roleno = roleno;
		this.rolename = rolename;
	}

	// Property accessors

	public String getRoleno() {
		return this.roleno;
	}

	public void setRoleno(String roleno) {
		this.roleno = roleno;
	}

	public String getRolename() {
		return this.rolename;
	}

	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

}