package cn.venice.D00.model;

/**
 * V0003Id entity. @author MyEclipse Persistence Tools
 */

public class V0003Id implements java.io.Serializable {

	// Fields

	private String userno;
	private String username;
	private String passwd;
	private String roleno;
	private String bmdm;
	private String deltag;
	private String bmmc;
	private String rolename;

	// Constructors

	/** default constructor */
	public V0003Id() {
	}

	/** minimal constructor */
	public V0003Id(String userno) {
		this.userno = userno;
	}

	/** full constructor */
	public V0003Id(String userno, String username, String passwd,
                   String roleno, String bmdm, String deltag, String bmmc,
                   String rolename) {
		this.userno = userno;
		this.username = username;
		this.passwd = passwd;
		this.roleno = roleno;
		this.bmdm = bmdm;
		this.deltag = deltag;
		this.bmmc = bmmc;
		this.rolename = rolename;
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

	public String getBmmc() {
		return this.bmmc;
	}

	public void setBmmc(String bmmc) {
		this.bmmc = bmmc;
	}

	public String getRolename() {
		return this.rolename;
	}

	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof V0003Id))
			return false;
		V0003Id castOther = (V0003Id) other;

		return ((this.getUserno() == castOther.getUserno()) || (this
				.getUserno() != null && castOther.getUserno() != null && this
				.getUserno().equals(castOther.getUserno())))
				&& ((this.getUsername() == castOther.getUsername()) || (this
						.getUsername() != null
						&& castOther.getUsername() != null && this
						.getUsername().equals(castOther.getUsername())))
				&& ((this.getPasswd() == castOther.getPasswd()) || (this
						.getPasswd() != null && castOther.getPasswd() != null && this
						.getPasswd().equals(castOther.getPasswd())))
				&& ((this.getRoleno() == castOther.getRoleno()) || (this
						.getRoleno() != null && castOther.getRoleno() != null && this
						.getRoleno().equals(castOther.getRoleno())))
				&& ((this.getBmdm() == castOther.getBmdm()) || (this.getBmdm() != null
						&& castOther.getBmdm() != null && this.getBmdm()
						.equals(castOther.getBmdm())))
				&& ((this.getDeltag() == castOther.getDeltag()) || (this
						.getDeltag() != null && castOther.getDeltag() != null && this
						.getDeltag().equals(castOther.getDeltag())))
				&& ((this.getBmmc() == castOther.getBmmc()) || (this.getBmmc() != null
						&& castOther.getBmmc() != null && this.getBmmc()
						.equals(castOther.getBmmc())))
				&& ((this.getRolename() == castOther.getRolename()) || (this
						.getRolename() != null
						&& castOther.getRolename() != null && this
						.getRolename().equals(castOther.getRolename())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getUserno() == null ? 0 : this.getUserno().hashCode());
		result = 37 * result
				+ (getUsername() == null ? 0 : this.getUsername().hashCode());
		result = 37 * result
				+ (getPasswd() == null ? 0 : this.getPasswd().hashCode());
		result = 37 * result
				+ (getRoleno() == null ? 0 : this.getRoleno().hashCode());
		result = 37 * result
				+ (getBmdm() == null ? 0 : this.getBmdm().hashCode());
		result = 37 * result
				+ (getDeltag() == null ? 0 : this.getDeltag().hashCode());
		result = 37 * result
				+ (getBmmc() == null ? 0 : this.getBmmc().hashCode());
		result = 37 * result
				+ (getRolename() == null ? 0 : this.getRolename().hashCode());
		return result;
	}

}